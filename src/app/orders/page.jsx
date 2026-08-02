import { getOrdersByUserId } from "@/actions/server/Order";
import OrderCard from "@/components/Cards/OrderCard";
import Link from "next/link";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const OrdersPage = async () => {
  const orders = await getOrdersByUserId();

  const orderItems = orders.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-secondary mb-8">My Orders</h1>

      {orderItems.length === 0 ? (
        <div className="bg-base-100 rounded-3xl px-8 py-20 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <FiShoppingBag className="text-primary text-5xl" />
          </div>
          <h2 className="text-3xl font-bold text-secondary">No Orders Yet</h2>
          <p className="mt-3 max-w-md text-base-content/60 leading-relaxed">
            You haven't placed any orders yet. Explore our collection and place
            your first order to see it here.
          </p>
          <Link
            href="/products"
            className="btn btn-primary rounded-xl px-8 mt-8"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {orderItems.map((order) => (
            <OrderCard order={order} key={order._id}></OrderCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
