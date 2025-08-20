"use client";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../../Utilities/SectionHeader/SectionHeader";

const products = [
  {
    id: 1,
    slug: "The north coat",
    name: "The north coat",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755460988/Frame_605_yxqvif.png",
    price: 260,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    slug: "Gucci duffle bag",
    name: "Gucci duffle bag",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755466518/Frame_606_uhpkd1.png",
    price: 960,
    oldPrice: 1160,
    rating: 4.8,
    reviews: 65,
  },
  {
    id: 3,
    slug: "RGB liquid CPU Cooler",
    name: "RGB liquid CPU Cooler",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755460988/Frame_610_qv1hfj.png",
    price: 375,
    oldPrice: 400,
    rating: 4.6,
    reviews: 99,
  },
  {
    id: 4,
    slug: "Small BookSelf",
    name: "Small BookSelf",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755460988/Frame_612_1_jk89qb.png",
    price: 375,
    oldPrice: 400,
    rating: 4.6,
    reviews: 99,
  },
];

const BestSellingProducts = () => {
  return (
    <section
      className="main_container top_container"
      aria-labelledby="best-selling-products"
    >
      {/* Section Header */}
      <header className="flex items-center justify-between">
        <SectionHeader label="This Month" title="Best Selling Products" />
        <Link href="/products">
          <button className="hidden lg:block btn btn-primary font-poppins">
            View All
          </button>
        </Link>
      </header>

      {/* Product Grid */}
      <main
        id="best-selling-products"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"
      >
        {products.map((product) => (
          <article
            key={product.id}
            className="font-poppins"
            aria-label={product.name}
          >
            <div className="block group">
              <div className="relative w-full h-[250px] bg-[#f5f5f5] rounded-md overflow-hidden transition">
                {/* Wishlist & Eye Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button
                    className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
                    aria-label={`Add ${product.name} to wishlist`}
                  >
                    <FaRegHeart size={20} className="text-black" />
                  </button>
                  <button
                    className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
                    aria-label={`View details of ${product.name}`}
                  >
                    <LuEye size={20} className="text-black" />
                  </button>
                </div>

                {/* Product Image */}
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={`${product.name} product image`}
                    width={190}
                    height={180}
                    className="object-contain"
                    priority={product.id === 1}
                  />
                </div>

                {/* Add to Cart Button */}
                <button
                  className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-sm md:text-base font-medium font-poppins opacity-0 group-hover:opacity-100 transition cursor-pointer"
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-[16px]">
              <h2 className="text-sm md:text-base font-medium mb-2 line-clamp-2">
                {product.name}
              </h2>
              <div className="flex items-center gap-4 font-medium text-sm md:text-base">
                <span className="text-[#DB4444]">${product.price}</span>
                <span className="text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                ))}
                <span className="ml-2 text-xs md:text-sm text-gray-500 font-semibold">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </article>
        ))}
      </main>
      <div className="lg:hidden mt-15 flex justify-center">
        <Link href="/products">
          <button className=" btn btn-primary font-poppins">View All</button>
        </Link>
      </div>
    </section>
  );
};

export default BestSellingProducts;
