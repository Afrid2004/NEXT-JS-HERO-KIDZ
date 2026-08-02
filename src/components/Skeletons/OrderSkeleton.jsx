import React from "react";

const OrderSkeleton = () => {
  return (
    <div className="py-10">
      {/* Page Title */}
      <div className="skeleton h-10 w-52 mb-8"></div>

      <div className="space-y-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-base-100 border border-base-300 rounded-3xl p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div className="space-y-3">
                <div className="skeleton h-4 w-24"></div>
                <div className="skeleton h-7 w-56"></div>
              </div>

              <div className="skeleton h-8 w-24 rounded-full"></div>
            </div>

            {/* Product */}
            <div className="flex items-center gap-5 py-5 border-y border-base-300">
              <div className="skeleton w-24 h-24 rounded-2xl shrink-0"></div>

              <div className="flex-1 space-y-3">
                <div className="skeleton h-6 w-3/4"></div>
                <div className="skeleton h-4 w-44"></div>
                <div className="skeleton h-4 w-36"></div>
              </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
              {[1, 2, 3, 4].map((box) => (
                <div key={box} className="space-y-2">
                  <div className="skeleton h-3 w-16"></div>
                  <div className="skeleton h-6 w-20"></div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-5 border-t border-base-300 flex items-center justify-between">
              <div className="skeleton h-4 w-56"></div>

              <div className="skeleton h-11 w-36 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSkeleton;
