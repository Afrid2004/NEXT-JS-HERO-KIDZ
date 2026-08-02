import React from "react";

const OrderDetailsSkeleton = () => {
  return (
    <div className="animate-pulse space-y-8 py-10">
      {/* Header */}
      <div className="bg-base-100 border border-base-300 rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          <div className="space-y-3">
            <div className="skeleton h-8 w-64"></div>
            <div className="skeleton h-4 w-40"></div>
          </div>

          <div className="flex gap-3">
            <div className="skeleton h-8 w-24 rounded-full"></div>
            <div className="skeleton h-8 w-24 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="bg-base-100 border border-base-300 rounded-3xl divide-y divide-base-300">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center gap-5 p-6">
            <div className="skeleton w-24 h-24 rounded-2xl"></div>

            <div className="flex-1 space-y-3">
              <div className="skeleton h-6 w-2/3"></div>
              <div className="skeleton h-4 w-40"></div>
              <div className="skeleton h-4 w-32"></div>
            </div>

            <div className="space-y-3 text-right">
              <div className="skeleton h-6 w-24"></div>
              <div className="skeleton h-4 w-20"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Shipping */}
        <div className="bg-base-100 border border-base-300 rounded-3xl p-8 space-y-4">
          <div className="skeleton h-7 w-48"></div>

          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
          <div className="skeleton h-4 w-4/6"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-3/4"></div>
        </div>

        {/* Summary */}
        <div className="bg-base-100 border border-base-300 rounded-3xl p-8">
          <div className="space-y-5">
            <div className="flex justify-between">
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-12"></div>
            </div>

            <div className="flex justify-between">
              <div className="skeleton h-4 w-24"></div>
              <div className="skeleton h-4 w-16"></div>
            </div>

            <div className="flex justify-between">
              <div className="skeleton h-4 w-24"></div>
              <div className="skeleton h-4 w-14"></div>
            </div>

            <div className="divider"></div>

            <div className="flex justify-between items-center">
              <div className="skeleton h-6 w-20"></div>
              <div className="skeleton h-8 w-32"></div>
            </div>

            <div className="skeleton h-12 w-full rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsSkeleton;
