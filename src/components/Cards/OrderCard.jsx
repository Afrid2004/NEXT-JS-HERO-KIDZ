import Image from "next/image";
import Link from "next/link";
import React from "react";

const OrderCard = ({ order }) => {
  const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);
  const firstItem = order.items[0];

  const statusColor = {
    pending: "badge-warning",
    processing: "badge-info",
    shipped: "badge-primary",
    delivered: "badge-success",
    cancelled: "badge-error",
  };

  return (
    <Link href={`/orders/${order._id}`}>
      <div className="group bg-base-100 border border-base-300 rounded-3xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-sm text-base-content/60 mb-1">Tracking ID</p>
            <h2 className="text-xl font-bold text-secondary">
              {order.trackingId}
            </h2>
          </div>

          <span
            className={`badge ${
              statusColor[order.status] || "badge-outline"
            } capitalize px-3 py-3`}
          >
            {order.status}
          </span>
        </div>

        {/* Product Preview */}
        <div className="flex items-center gap-5 py-5 border-y border-base-300">
          <div className="w-24 h-24 rounded-2xl overflow-hidden bg-base-200 flex items-center justify-center">
            <Image
              src={firstItem.image}
              alt={firstItem.title}
              width={90}
              height={90}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-lg text-secondary line-clamp-2">
              {firstItem.title}
            </h3>

            <p className="text-sm text-base-content/60 mt-2">
              {order.items.length > 1
                ? `${order.items.length} products in this order`
                : "1 product in this order"}
            </p>

            <p className="text-sm text-base-content/60 mt-1">
              Ordered on{" "}
              {new Date(order.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          <div>
            <p className="text-xs text-base-content/60 uppercase tracking-wide">
              Items
            </p>
            <p className="font-bold text-lg">{totalItems}</p>
          </div>

          <div>
            <p className="text-xs text-base-content/60 uppercase tracking-wide">
              Payment
            </p>
            <p className="font-bold uppercase">{order.paymentMethod}</p>
          </div>

          <div>
            <p className="text-xs text-base-content/60 uppercase tracking-wide">
              Shipping
            </p>
            <p className="font-bold text-success">Free</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-base-content/60 uppercase tracking-wide">
              Total
            </p>
            <p className="font-extrabold text-2xl text-primary">
              TK. {order.totalPrice.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="pt-5 border-t border-base-300 flex items-center justify-between">
          <p className="text-sm text-base-content/60">
            Click to view complete order details
          </p>

          <div className="btn btn-primary rounded-xl px-5 group-hover:translate-x-1 transition-transform duration-300">
            View Details
            <span className="ml-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
