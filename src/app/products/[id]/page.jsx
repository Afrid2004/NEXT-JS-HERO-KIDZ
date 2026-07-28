import { getSingleProduct } from "@/actions/server/Product";
import { anekBangla } from "@/app/layout";
import Breadcrumbs from "@/components/layouts/Breadcrumbs";
import Image from "next/image";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdBolt } from "react-icons/md";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product?._id) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  const discountPrice = Math.round(
    product.price - (product.price * (product.discount ?? 0)) / 100,
  );

  const shortDescription =
    product.description?.replace(/\n/g, " ")?.substring(0, 160)?.trim() + "...";

  return {
    title: product.title,
    description: shortDescription,
    keywords: [
      product.title,
      product.bangla,
      "Educational Toy",
      "Kids Toy",
      "STEM Toy",
      "Learning Toy",
      "Montessori Toy",
      "Hero Kidz",
    ],

    alternates: {
      canonical: `https://next-js-hero-kidz.vercel.app/products/${id}`,
    },

    openGraph: {
      title: `${product.title} | Hero Kidz`,

      description: shortDescription,

      url: `https://next-js-hero-kidz.vercel.app/${id}`,

      siteName: "Hero Kidz",

      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],

      locale: "en_US",

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: `${product.title}`,

      description: shortDescription,

      images: [product.image],
    },

    robots: {
      index: true,
      follow: true,
    },

    other: {
      "product:price:amount": discountPrice,
      "product:price:currency": "BDT",
      "product:availability": "in stock",
      "product:brand": "Hero Kidz",
      "product:rating": product.ratings,
    },
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);
  console.log(product);
  const discountPrice = Math.round(
    product.price - (product.price * (product.discount ?? 0)) / 100,
  );

  return (
    <div className="container py-10">
      {/* Breadcrumb */}
      <Breadcrumbs></Breadcrumbs>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left */}
        <div className="space-y-4">
          <div className="bg-base-200 rounded-3xl p-6">
            <Image
              src={product.image}
              alt={product.title}
              width={700}
              height={700}
              className="rounded-2xl w-full object-cover"
            />
          </div>

          {/* Thumbnail */}
          <div
            className="flex flex-wrap gap-3
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          "
          >
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="w-24 h-24 rounded-xl overflow-hidden border border-base-300 cursor-pointer hover:border-primary"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="badge badge-primary badge-outline mb-3">
            Educational Toy
          </div>

          <h1 className="text-4xl font-bold text-secondary  mb-5">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-4 mt-5">
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar />
              <span className="font-semibold text-black">
                {product.ratings}
              </span>
            </div>

            <div className="divider divider-horizontal"></div>

            <span>{product.reviews} Reviews</span>

            <div className="divider divider-horizontal"></div>

            <span>{product.sold} Sold</span>
          </div>

          {/* Price */}
          <div className="bg-base-200 rounded-2xl p-5 mt-6">
            <div className="flex items-center gap-4 flex-wrap">
              <h2 className="text-4xl font-bold text-primary">
                TK. {discountPrice}
              </h2>

              <del className="text-gray-400 text-xl">TK. {product.price}</del>

              <span className="badge badge-success badge-lg">
                {product.discount}% OFF
              </span>
            </div>
          </div>

          {/* Stock */}
          <div className="mt-6">
            <span className="badge badge-success gap-2 p-4">
              <FaCheckCircle />
              In Stock
            </span>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Quantity</h3>

            <div className="join">
              <button className="btn join-item">-</button>
              <button className="btn join-item">1</button>
              <button className="btn join-item">+</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <button className="btn btn-primary btn-lg">
              <IoCartOutline size={22} />
              Add To Cart
            </button>

            <button className="btn btn-secondary btn-lg text-white">
              <MdBolt size={22} />
              Buy Now
            </button>
          </div>

          {/* Info */}
          <div className="bg-base-200 rounded-2xl p-6 mt-8">
            <h3 className="font-bold text-xl mb-4 text-secondary">
              Product Information
            </h3>

            <div className="space-y-3">
              {product.info.map((data, idx) => {
                return (
                  <div key={idx} className="flex gap-2">
                    <FaCheckCircle className="text-primary mt-1" />
                    <span className={anekBangla.className}>{data}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-secondary mb-5">
          Product Description
        </h2>

        <div className="bg-base-200 rounded-2xl p-6">
          <p
            className={`whitespace-pre-line leading-8 ${anekBangla.className}`}
          >
            {product.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-secondary mb-6">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Educational Toy",
            "STEM Learning",
            "Non-toxic Material",
            "Improve Memory",
            "Logical Thinking",
            "Premium Quality",
          ].map((item) => (
            <div
              key={item}
              className="bg-base-100 border border-base-300 rounded-xl p-5 flex gap-3"
            >
              <FaCheckCircle className="text-primary mt-1" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-secondary mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {product.qna.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`collapse collapse-arrow bg-base-200 ${anekBangla.className}`}
              >
                <input
                  type="radio"
                  name="faq"
                  defaultChecked={idx == 0 ? true : false}
                />
                <div className="collapse-title font-semibold">
                  {item.question}
                </div>
                <div className="collapse-content">{item.answer}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
