import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleButton = () => {
  const params = useSearchParams();
  const callback = params.get("callbackUrl") || "/";
  const handleGoogleLoginIn = async () => {
    const res = await signIn("google", {
      callbackUrl: callback,
    });
    if (res.ok) {
      alert("success");
    } else {
      alert("error");
    }
  };
  return (
    <button
      onClick={handleGoogleLoginIn}
      className="btn btn-outline w-full rounded-xl"
    >
      <FaGoogle className="text-red-500" />
      Continue With Google
    </button>
  );
};

export default GoogleButton;
