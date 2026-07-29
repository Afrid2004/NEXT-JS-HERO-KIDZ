"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const AddToCartBtn = ({ product }) => {
  const isLoggedIn = false;
  const router = useRouter();
  const path = usePathname();
  const addToCart = () => {
    if (isLoggedIn) {
      alert(product._id);
    } else {
      // used callback url to redirect user previous page after logged in
      router.push(`/login?callbackurl=${path}`);
    }
  };
  return (
    <button onClick={addToCart} className="btn btn-primary btn-lg">
      <IoCartOutline size={22} />
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
