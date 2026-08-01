"use client";

import {
  decreaseCartItem,
  deleteCart,
  increaseCartItem,
} from "@/actions/server/Cart";
import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";

const CartCard = ({ cart, updateQuentity, removeItem }) => {
  const handleDelete = async (id) => {
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteCart(id);
        if (result.success) {
          await Swal.fire({
            title: "Deleted!",
            text: "Your cart has been deleted.",
            icon: "success",
          });
          removeItem(id);
        } else {
          await Swal.fire({
            title: "Oops!",
            text: "Failed to delete cart.",
            icon: "error",
          });
        }
      }
    });
  };

  const increaseItem = async (cart) => {
    try {
      const res = await increaseCartItem(cart._id, cart.quantity);
      if (res.success) {
        updateQuentity(cart._id, cart.quantity + 1);
        console.log("Increased");
      } else {
        await Swal.fire({
          title: "Oops!",
          text: res.message || "Fail to increase!",
          icon: "error",
        });
      }
    } catch (error) {
      await Swal.fire({
        title: "Oops!",
        text: "Something went wrong!",
        icon: "error",
      });
      console.log(error);
    }
  };

  const decreaseItem = async (cart) => {
    try {
      const res = await decreaseCartItem(cart._id, cart.quantity);
      if (res.success) {
        console.log("Decreased");
        updateQuentity(cart._id, cart.quantity - 1);
      } else {
        await Swal.fire({
          title: "Oops!",
          text: res.message || "Fail to decrease!",
          icon: "error",
        });
      }
    } catch (error) {
      await Swal.fire({
        title: "Oops!",
        text: "Something went wrong!",
        icon: "error",
      });
      console.log(error);
    }
  };

  return (
    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Product Image */}
        <div className="w-full sm:w-36 h-36 rounded-xl overflow-hidden bg-base-200 flex items-center justify-center shrink-0">
          <Image
            src={cart.image}
            alt={cart.title}
            width={140}
            height={140}
            className="object-contain w-full h-full p-2 rounded-2xl"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-secondary line-clamp-2">
              {cart.title}
            </h2>

            <div className="mt-3 space-y-1">
              <p className="text-primary text-2xl font-bold">৳ {cart.price}</p>

              <p className="text-sm text-gray-500">
                Subtotal:
                <span className="font-semibold text-secondary ml-1">
                  TK. {(cart.price * cart.quantity).toLocaleString()}
                </span>
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            {/* Quantity */}
            <div className="flex items-center border border-base-300 rounded-xl overflow-hidden w-fit">
              <button
                onClick={() => decreaseItem(cart)}
                className="w-11 h-11 flex items-center justify-center hover:bg-base-200 transition"
              >
                <FiMinus size={18} />
              </button>

              <div className="w-14 text-center font-bold text-lg">
                {cart.quantity}
              </div>

              <button
                onClick={() => increaseItem(cart)}
                className="w-11 h-11 flex items-center justify-center hover:bg-base-200 transition"
              >
                <FiPlus size={18} />
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => handleDelete(cart._id)}
              className="btn btn-error btn-outline rounded-xl hover:text-white"
            >
              <FiTrash2 />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
