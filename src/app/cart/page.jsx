import { getCartByUserId } from "@/actions/server/Cart";
import CartComponent from "@/components/Cart/CartComponent";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

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
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="w-28 h-28 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <IoCartOutline size={55} className="text-primary" />
              </div>

              <h2 className="text-3xl font-bold text-secondary mt-6">
                Your cart is empty
              </h2>

              <p className="text-base-content/70 mt-3 leading-7">
                Looks like you haven't added any products to your cart yet.
                Start shopping and discover amazing products for your kids.
              </p>

              <Link href="/products" className="btn btn-primary mt-8 px-8">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
