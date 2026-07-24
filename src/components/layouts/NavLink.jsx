"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  // get the path
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`text-lg ${path.startsWith(href) ? "text-primary font-bold" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
