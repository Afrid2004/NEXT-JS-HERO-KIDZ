"use client";

import Link from "next/link";
import { FaHome, FaArrowLeft, FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="container min-h-[calc(100vh-250px)] flex items-center justify-center py-20">
      <div className="max-w-2xl w-full text-center">
        <div className="mx-auto w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
          <FaSearch className="text-6xl text-primary" />
        </div>

        <h1 className="mt-8 text-7xl md:text-8xl font-black text-primary">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">
          Page Not Found
        </h2>

        <p className="mt-5 text-base-content/70 leading-8 max-w-lg mx-auto">
          Sorry! The page you are looking for doesn't exist, has been moved, or
          the URL might be incorrect.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="btn btn-primary btn-lg">
            <FaHome />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-secondary btn-lg"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
