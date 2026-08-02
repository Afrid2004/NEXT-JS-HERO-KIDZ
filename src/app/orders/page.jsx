import { getOrdersByUserId } from "@/actions/server/Order";
import OrderCard from "@/components/Cards/OrderCard";
import React from "react";

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
        <div className="bg-base-100 border border-base-300 rounded-3xl py-20 text-center">
          <h2 className="text-2xl font-bold">No Orders Found</h2>
          <p className="text-base-content/60 mt-2">
            You haven't placed any orders yet.
          </p>
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
