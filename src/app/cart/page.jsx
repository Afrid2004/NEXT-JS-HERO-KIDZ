import { getCartByUserId } from "@/actions/server/Cart";
import CartCard from "@/components/Cards/CartCard";
import CartComponent from "@/components/Cart/CartComponent";
import React from "react";

const CartPage = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const cart = await getCartByUserId();
  const cartItems = cart.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return (
    <div>
      <div className="py-10">
        <h1 className="mb-5 font-bold text-3xl text-secondary">My Cart</h1>
        {cartItems.length > 0 ? (
          <CartComponent cartItems={cartItems}></CartComponent>
        ) : (
          "No data found"
        )}
      </div>
    </div>
  );
};

export default CartPage;
