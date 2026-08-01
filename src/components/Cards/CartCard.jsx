"use client";

import { deleteCart } from "@/actions/server/Cart";
import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";

const CartCard = ({ cart }) => {
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
  return (
    <div className="bg-base-100 border border-base-300 rounded-2xl p-4 hover:shadow-sm  transition-all">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Product Image */}
        <div className="w-full md:w-36 h-36 rounded-xl overflow-hidden bg-base-200 flex items-center justify-center">
          <Image
            src={cart.image}
            alt={cart.title}
            width={140}
            height={140}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-secondary line-clamp-2">
              {cart.title}
            </h2>

            <p className="text-primary text-2xl font-bold mt-3">
              ৳ {cart.price}
            </p>
          </div>

          {/* Bottom */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            {/* Quantity */}
            <div className="flex items-center border border-base-300 rounded-xl overflow-hidden">
              <button className="w-11 h-11 flex items-center justify-center hover:bg-base-200 transition">
                <FiMinus size={18} />
              </button>

              <div className="w-14 text-center font-bold text-lg">
                {cart.quantity}
              </div>

              <button className="w-11 h-11 flex items-center justify-center hover:bg-base-200 transition">
                <FiPlus size={18} />
              </button>
            </div>

            {/* Delete */}
            <button
              onClick={() => handleDelete(cart._id)}
              className="btn btn-error btn-outline hover:text-white rounded-xl"
            >
              <FiTrash2 size={18} />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
