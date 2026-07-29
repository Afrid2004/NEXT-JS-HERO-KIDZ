"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { MdLogin } from "react-icons/md";

const AuthButton = () => {
  const session = useSession();

  return (
    <div>
      {session.status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="btn btn-secondary btn-outline btn-sm md:btn-md"
        >
          Logout
        </button>
      ) : (
        <Link href="/login">
          <button className="btn btn-primary btn-outline btn-sm md:btn-md">
            <span className="hidden sm:block">Login</span>
            <MdLogin size={20} />
          </button>
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
