"use client";

import Link from "next/link";
import { MdErrorOutline, MdRefresh } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Error = ({ error, reset }) => {
  return (
    <div className="container min-h-[calc(100vh-250px)] flex items-center justify-center py-20">
      <div className="max-w-xl w-full text-center">
        <div className="mx-auto w-28 h-28 rounded-full bg-error/10 flex items-center justify-center">
          <span className="text-7xl text-red-400">
            <MdErrorOutline />
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-8">
          Oops! Something Went Wrong
        </h1>

        <p className="mt-4 text-base-content/70 leading-7">
          We're sorry, but an unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button onClick={() => reset()} className="btn btn-primary btn-lg">
            <MdRefresh size={22} />
            Try Again
          </button>

          <Link href="/" className="btn btn-outline btn-secondary btn-lg">
            <FaHome size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
