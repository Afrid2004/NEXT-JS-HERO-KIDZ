"use client";
import { handleAddToCart } from "@/actions/server/Cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const AddToCartBtn = ({ product }) => {
  const session = useSession();
  const isLoggedIn = session.status === "authenticated";
  const router = useRouter();
  const path = usePathname();
  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    if (isLoggedIn) {
      setLoading(true);
      try {
        const res = await handleAddToCart(product._id);
        if (res.success) {
          await Swal.fire(
            "Success",
            `${product.title} has been added to cart!`,
            "success",
          );
        } else {
          await Swal.fire("Error", `Failed to add in cart!`, "error");
        }
      } catch (error) {
        await Swal.fire(
          "Error",
          error.response?.data?.message || "Something went wrong!",
          "error",
        );
      } finally {
        setLoading(false);
      }
    } else {
      // used callback url to redirect user previous page after logged in
      router.push(`/login?callbackurl=${path}`);
    }
  };
  return (
    <button
      disabled={session.status === "loading"}
      onClick={addToCart}
      className="btn btn-primary btn-lg w-full"
    >
      <IoCartOutline size={22} />
      {loading ? "Adding..." : "Add To Cart"}
    </button>
  );
};

export default AddToCartBtn;
