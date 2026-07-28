import Products from "@/components/Home/Products";
import ProductCardSkeleton from "@/components/Skeletons/ProductCardSkeleton";
import React, { Suspense } from "react";

export const metadata = {
  title: "All Products",

  description:
    "Browse Hero Kidz's complete collection of educational toys, Montessori materials, STEM kits, learning boards, puzzles, science toys, and creative educational products.",

  openGraph: {
    title: "Educational Toys Collection | Hero Kidz",

    description:
      "Find high-quality educational toys designed to improve creativity, logical thinking, motor skills, and early childhood learning.",

    images: [
      {
        url: "https://i.ibb.co.com/sJz8XSzG/2.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://i.ibb.co.com/sJz8XSzG/2.png"],
  },
};

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
