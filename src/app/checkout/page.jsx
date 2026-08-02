import { getCartByUserId } from "@/actions/server/Cart";
import CheckOut from "@/components/CheckOut/CheckOut";
import React from "react";

const CheckOutPage = async () => {
  const cart = await getCartByUserId();
  const cartItems = cart.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return (
    <div>
      <div className="py-10">
        <div className="mb-5">
          <h1 className="text-4xl font-bold text-secondary">Checkout</h1>
          <p className="text-base-content/60 mt-2">
            Complete your shipping information to place your order.
          </p>
        </div>
        <div>
          <CheckOut cartItems={cartItems}></CheckOut>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
