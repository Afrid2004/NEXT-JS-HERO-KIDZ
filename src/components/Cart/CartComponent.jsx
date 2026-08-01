"use client";

import React, { useMemo, useState } from "react";
import CartCard from "../Cards/CartCard";
import Link from "next/link";

const CartComponent = ({ cartItems = [] }) => {
  const [items, setItems] = useState(cartItems);

  const updateQuentity = (id, incOrDec) => {
    setItems((prev) => {
      return prev.map((item) =>
        item._id == id ? { ...item, quantity: incOrDec } : item,
      );
    });
  };

  const removeItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => item._id != id);
    });
  };

  const calcTotalItem = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const calcSubTotal = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [items],
  );
  return (
    <div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-5">
          {items.map((item) => (
            <CartCard
              key={item._id}
              cart={{ ...item, _id: item._id.toString() }}
              updateQuentity={updateQuentity}
              removeItem={removeItem}
            />
          ))}
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-base-100 border border-base-300 rounded-2xl p-6 sticky top-10">
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between text-base">
                <span className="text-gray-500">Total Items</span>
                <span className="font-semibold">{calcTotalItem}</span>
              </div>

              <div className="flex justify-between text-base">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold">
                  TK. {calcSubTotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-base">
                <span className="text-gray-500">Shipping</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>

              <div className="divider my-2"></div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-secondary">Total</span>

                <span className="text-2xl font-bold text-primary">
                  TK. {calcSubTotal.toLocaleString()}
                </span>
              </div>

              <button className="btn btn-primary btn-lg w-full mt-3">
                Proceed To Checkout
              </button>

              <Link href={"/products"} className="btn btn-outline w-full">
                Continue Shopping
              </Link>

              <p className="text-center text-xs text-gray-500 mt-2">
                Secure checkout • SSL Protected
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
