import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineExplore } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <div className="w-full py-10">
        <div className="flex items-center gap-2">
          <div className="flex-1 space-y-8">
            <h1 className="text-7xl font-bold text-secondary leading-25">
              Give your child a <br />
              <span className="text-primary">bright future.</span>
            </h1>
            <p>
              Buy every toy with up to{" "}
              <span className="font-bold text-3xl text-secondary">15%</span>{" "}
              Discount!
            </p>
            <Link href={"/products"}>
              <button className="btn btn-outline btn-primary text-lg">
                <MdOutlineExplore size={25} /> Explore Products
              </button>
            </Link>
          </div>
          <div className="flex-1">
            <div className="w-full flex  items-center justify-end">
              <Image
                src={"/assets/kidsbg.png"}
                width={700}
                height={700}
                alt="kids-bg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
