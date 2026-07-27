import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div
          key={idx}
          className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-sm"
        >
          {/* Image */}
          <div className="skeleton h-72 w-full"></div>

          {/* Content */}
          <div className="p-5 space-y-4">
            {/* Title */}
            <div className="space-y-2">
              <div className="skeleton h-5 w-full"></div>
              <div className="skeleton h-5 w-3/4"></div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="skeleton h-4 w-4 rounded-full"></div>
              <div className="skeleton h-4 w-12"></div>
              <div className="skeleton h-4 w-20"></div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <div className="skeleton h-7 w-24"></div>
              <div className="skeleton h-5 w-16"></div>
            </div>

            {/* Stock */}
            <div className="skeleton h-4 w-28"></div>

            {/* Buttons */}
            <div className="space-y-3 pt-2">
              <div className="skeleton h-12 w-full rounded-xl"></div>
              <div className="skeleton h-12 w-full rounded-xl"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardSkeleton;
