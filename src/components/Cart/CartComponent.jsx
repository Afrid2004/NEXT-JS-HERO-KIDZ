"use client";

import React, { useMemo, useState } from "react";
import CartCard from "../Cards/CartCard";

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
          <div className="bg-base-100 border border-base-300 rounded-2xl p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-5 text-secondary">
              Order Summary
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{calcTotalItem}</span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>TK. {calcSubTotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="divider"></div>

              <div className="flex justify-between text-xl font-bold">
                <span className="text-secondary">Total</span>
                <span className="text-primary">TK. {calcSubTotal}</span>
              </div>

              <button className="btn btn-primary w-full mt-4">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
