import OrderDetailsSkeleton from "@/components/Skeletons/OrderDetailsSkeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      <OrderDetailsSkeleton></OrderDetailsSkeleton>
    </div>
  );
};

export default loading;
