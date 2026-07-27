"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  return (
    <div className="breadcrumbs text-sm mb-8">
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {paths.map((path, idx) => {
          const href = "/" + paths.slice(0, idx + 1).join("/");
          console.log(href);
          const isObjectId = /^[a-f\d]{24}$/i.test(path);
          return isObjectId ? (
            <li key={idx}>Product Details</li>
          ) : (
            <li key={idx}>
              <Link className="capitalize" href={href}>
                {decodeURIComponent(path)
                  .replaceAll("-", " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
