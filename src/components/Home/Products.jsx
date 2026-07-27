import { getAllProducts } from "@/actions/server/Product";
import React from "react";
import ProductCard from "../Cards/ProductCard";

const Products = async () => {
  const products = await getAllProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product) => {
        return <ProductCard key={product._id} product={product}></ProductCard>;
      })}
    </div>
  );
};

export default Products;
