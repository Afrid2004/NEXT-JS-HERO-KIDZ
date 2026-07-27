"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  // get the path
  const path = usePathname();
  const isActive = href === "/" ? path === "/" : path.startsWith(href);
  return (
    <Link
      href={href}
      className={`text-lg ${isActive ? "text-primary font-bold" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
