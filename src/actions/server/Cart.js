"use server";

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export const handleAddToCart = async (productId) => {
  const session = await getServerSession(authOptions);
  const cartsCollection = await dbConnect(collections.CARTS);
  const productsCollection = await dbConnect(collections.PRODUCTS);
  if (!session?.user) return { success: false };
  const user = session.user;
  const query = {
    productId: new ObjectId(productId),
    userId: session.id,
  };
  const isExistCart = await cartsCollection.findOne(query);
  // if already exist then increament
  if (isExistCart) {
    const updatedDoc = {
      $inc: {
        quantity: 1,
      },
    };
    const result = await cartsCollection.updateOne(query, updatedDoc);
    return { success: Boolean(result.modifiedCount) };
  }
  const product = await productsCollection.findOne({
    _id: new ObjectId(productId),
  });
  const cartData = {
    title: product.title,
    productId: product?._id,
    email: user?.email,
    quantity: 1,
    image: product.image,
    price: product.price - (product.price * product.discount) / 100,
    username: user?.name,
    userId: session.id,
  };
  const result = await cartsCollection.insertOne(cartData);
  return { success: result.acknowledged };
};

// get cart item by user id
export const getCartByUserId = async () => {
  const session = (await getServerSession(authOptions)) || {};
  const user = session?.user;
  const cartsCollection = await dbConnect(collections.CARTS);
  if (!user) return [];
  const query = {
    userId: session.id,
  };
  const product = await cartsCollection.find(query).toArray();
  return product;
};
