import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import AddToCartBtn from "../Buttons/AddToCartBtn";

const ProductCard = ({ product }) => {
  const { title, image, price, discount, ratings, reviews } = product;

  const finalPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="group bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-base-200">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-semibold text-lg text-neutral line-clamp-2 min-h-[56px]">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <FaStar className="text-yellow-400" />
          <span className="font-medium">{ratings}</span>
          <span className="text-gray-500 text-sm">({reviews} Reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-primary">
            TK. {finalPrice}
          </span>

          {discount > 0 && (
            <span className="text-gray-400 line-through">TK. {price}</span>
          )}
        </div>

        {/* Button */}
        <div className="mt-5 space-y-3">
          <AddToCartBtn product={product}></AddToCartBtn>
          <Link
            href={`/products/${product._id}`}
            className="btn btn-outline btn-secondary w-full rounded-xl"
          >
            View Details
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
