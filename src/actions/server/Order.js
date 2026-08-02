"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { clearCart, getCartByUserId } from "./Cart";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const createOrder = async (payloadData) => {
  const session = (await getServerSession(authOptions)) || {};
  const OrderCollections = await dbConnect(collections.ORDERS);
  const user = session?.user;
  if (!user) {
    return { success: false };
  }
  const cart = await getCartByUserId();
  if (cart.length == 0) {
    return { success: false };
  }
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  const uuid = crypto.randomUUID().replace(/-/g, "").toUpperCase();
  const trackingId = `HRKZ-${uuid.slice(0, 4)}-${uuid.slice(4, 8)}`;

  const newOrderData = {
    trackingId,
    userId: cart[0].userId,
    username: cart[0].username,
    email: cart[0].email,
    createdAt: new Date().toISOString(),
    status: "pending",
    totalPrice,
    ...payloadData,
    items: cart.map((item) => ({
      productId: item.productId,
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
    })),
  };
  const result = await OrderCollections.insertOne(newOrderData);
  if (Boolean(result.insertedId)) {
    await clearCart();
  }
  return { success: Boolean(result.insertedId) };
};

export const getOrdersByUserId = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return [];
  }
  const orderCollection = await dbConnect(collections.ORDERS);

  const query = {
    userId: session.id,
  };
  const result = await orderCollection
    .find(query)
    .sort({ createdAt: -1 })
    .toArray();

  return result;
};

export const getSingleOrder = async (id) => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return null;
  }
  const orderCollection = await dbConnect(collections.ORDERS);
  const query = {
    _id: new ObjectId(id),
    userId: session?.id,
  };

  const result = await orderCollection.findOne(query);
  return { ...result, _id: result._id.toString() };
};
