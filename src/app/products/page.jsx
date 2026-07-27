import Products from "@/components/Home/Products";
import ProductCardSkeleton from "@/components/Skeletons/ProductCardSkeleton";
import React, { Suspense } from "react";

const ProductsPage = () => {
  return (
    <div>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-secondary mb-3">All Products</h1>
        <Suspense fallback={<ProductCardSkeleton />}>
          <Products></Products>
        </Suspense>
      </div>
    </div>
  );
};

export default ProductsPage;
