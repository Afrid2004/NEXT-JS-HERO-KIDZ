import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <Image
            src={"/assets/logo.png"}
            width={50}
            height={50}
            alt="hero-kidz-logo"
          />
          <h2 className="text-2xl font-bold uppercase">
            Hero <span className="text-primary">Kidz</span>
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
