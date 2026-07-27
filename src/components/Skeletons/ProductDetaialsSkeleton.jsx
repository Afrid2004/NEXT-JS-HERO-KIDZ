import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <div className="flex gap-3 mb-8">
        <div className="skeleton h-4 w-16"></div>
        <div className="skeleton h-4 w-4"></div>
        <div className="skeleton h-4 w-24"></div>
        <div className="skeleton h-4 w-4"></div>
        <div className="skeleton h-4 w-32"></div>
      </div>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="bg-base-200 rounded-3xl p-6">
            <div className="skeleton aspect-square w-full rounded-2xl"></div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="skeleton w-24 h-24 rounded-xl"></div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          {/* Badge */}
          <div className="skeleton h-7 w-32 mb-4"></div>

          {/* Title */}
          <div className="space-y-3 mb-6">
            <div className="skeleton h-9 w-full"></div>
            <div className="skeleton h-9 w-3/4"></div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <div className="skeleton h-5 w-16"></div>
            <div className="skeleton h-5 w-24"></div>
            <div className="skeleton h-5 w-20"></div>
          </div>

          {/* Price */}
          <div className="bg-base-200 rounded-2xl p-5 mt-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="skeleton h-10 w-40"></div>
              <div className="skeleton h-6 w-24"></div>
              <div className="skeleton h-8 w-20"></div>
            </div>
          </div>

          {/* Stock */}
          <div className="mt-6">
            <div className="skeleton h-10 w-36"></div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <div className="skeleton h-6 w-24 mb-4"></div>

            <div className="flex gap-2">
              <div className="skeleton h-12 w-12"></div>
              <div className="skeleton h-12 w-16"></div>
              <div className="skeleton h-12 w-12"></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="skeleton h-14 w-full"></div>
            <div className="skeleton h-14 w-full"></div>
          </div>

          {/* Product Information */}
          <div className="bg-base-200 rounded-2xl p-6 mt-8">
            <div className="skeleton h-7 w-52 mb-5"></div>

            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="skeleton w-5 h-5 rounded-full"></div>
                  <div className="skeleton h-5 flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mt-16">
        <div className="skeleton h-9 w-72 mb-6"></div>

        <div className="bg-base-200 rounded-2xl p-6">
          <div className="space-y-4">
            <div className="skeleton h-5 w-full"></div>
            <div className="skeleton h-5 w-full"></div>
            <div className="skeleton h-5 w-11/12"></div>
            <div className="skeleton h-5 w-full"></div>
            <div className="skeleton h-5 w-10/12"></div>
            <div className="skeleton h-5 w-full"></div>
            <div className="skeleton h-5 w-8/12"></div>
            <div className="skeleton h-5 w-11/12"></div>
            <div className="skeleton h-5 w-9/12"></div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mt-16">
        <div className="skeleton h-9 w-60 mb-6"></div>

        <div className="grid md:grid-cols-2 gap-5">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-base-100 border border-base-300 rounded-xl p-5 flex items-center gap-4"
            >
              <div className="skeleton w-6 h-6 rounded-full shrink-0"></div>

              <div className="flex-1 space-y-2">
                <div className="skeleton h-5 w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <div className="skeleton h-9 w-80 mb-6"></div>

        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-base-200 rounded-xl border border-base-300 p-5"
            >
              <div className="flex items-center justify-between">
                <div className="skeleton h-6 w-3/4"></div>
                <div className="skeleton h-6 w-6 rounded"></div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-5/6"></div>
                <div className="skeleton h-4 w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsSkeleton;
