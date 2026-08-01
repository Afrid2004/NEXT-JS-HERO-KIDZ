import { getCartByUserId } from "@/actions/server/Cart";
import CartCard from "@/components/Cards/CartCard";
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
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 space-y-5">
              {cartItems.map((item) => (
                <CartCard key={item._id} cart={item} />
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
                    <span>3</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>৳ 2,622</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="divider"></div>

                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-secondary">Total</span>
                    <span className="text-primary">৳ 2,622</span>
                  </div>

                  <button className="btn btn-primary w-full mt-4">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          "No data found"
        )}
      </div>
    </div>
  );
};

export default CartPage;
