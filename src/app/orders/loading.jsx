import OrderSkeleton from "@/components/Skeletons/OrderSkeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      <OrderSkeleton></OrderSkeleton>
    </div>
  );
};

export default loading;
