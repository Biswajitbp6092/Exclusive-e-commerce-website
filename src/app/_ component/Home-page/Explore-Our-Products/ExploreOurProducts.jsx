"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "../../Utilities/SectionHeader/SectionHeader";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755527825/Frame_604_puhsrv.png",
    price: 100,
    status: "",
    rating: 3.0,
    reviews: 35,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755527825/Frame_604_1_ipq5yq.png",
    price: 360,
    status: "",
    rating: 4.1,
    reviews: 95,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755527824/Frame_604_2_wxpx6r.png",
    price: 700,
    status: "",
    rating: 5.0,
    reviews: 325,
  },
  {
    id: 4,
    name: "Curology Product Set ",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755528126/e7bdd11662ea1dfc2d615a5bb054e139a764f306_x69lro.png",
    price: 500,
    status: "",
    rating: 4.0,
    reviews: 145,
  },
  {
    id: 5,
    name: "CANON EOS DSLR Camera",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755527825/Frame_604_1_ipq5yq.png",
    price: 360,
    status: "",
    rating: 4.1,
    reviews: 95,
  },
  {
    id: 6,
    name: "Curology Product Set ",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755528126/e7bdd11662ea1dfc2d615a5bb054e139a764f306_x69lro.png",
    price: 500,
    status: "",
    rating: 4.0,
    reviews: 145,
  },
];

const moreProduct = [
  {
    id: 1,
    name: "Kids Electric Car",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755527822/Frame_608_qpjw7p.png",
    price: 960,
    status: "New",
    rating: 5.0,
    reviews: 65,
    colors: ["#FB1314", "#DB4444"],
  },
  {
    id: 2,
    name: "Jr. Zoom Soccer Cleats",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755527822/Frame_608_1_h6dkq4.png",
    price: 1160,
    status: "",
    rating: 5.5,
    reviews: 35,
    colors: ["#EEFF61", "#DB4444"],
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755527821/Frame_608_2_ydhjag.png",
    price: 660,
    status: "New",
    rating: 4.8,
    reviews: 55,
    colors: ["#000000", "#DB4444"],
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755527821/Frame_608_3_tf5mis.png",
    price: 360,
    status: "",
    rating: 4.6,
    reviews: 85,
    colors: ["#000000", "#DB4444"],
  },
  {
    id: 5,
    name: "GP11 Shooter USB Gamepad",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755527821/Frame_608_2_ydhjag.png",
    price: 660,
    status: "New",
    rating: 4.8,
    reviews: 55,
    colors: ["#000000", "#DB4444"],
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next products"
    className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-[#DB4444] rounded-tl-lg rounded-bl-lg px-2 py-5 hover:text-black cursor-pointer z-10"
  >
    <IoMdArrowForward size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous products"
    className="hidden lg:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-[#DB4444] rounded-tr-lg rounded-br-lg px-2 py-5 hover:text-black cursor-pointer z-10"
  >
    <IoMdArrowBack size={24} />
  </button>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const ExploreOurProducts = () => {
  // color selection map: { [productId]: hexColor }
  const [selectedColors, setSelectedColors] = useState({});

  const getActiveColor = (product) =>
    selectedColors[product.id] ?? (product.colors ? product.colors[0] : null);

  const handleColorClick = (productId, color) =>
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));

  const renderCard = (product) => {
    const safeRating = Math.max(0, Math.min(5, product.rating ?? 0));

    return (
      <article
        key={product.id}
        className="font-poppins mt-12 px-[15px] cursor-pointer"
        aria-label={product.name}
      >
        <div className="relative group w-auto h-[250px] bg-[#f5f5f5] transition rounded-md overflow-hidden">
          {product.status && product.status.trim() !== "" && (
            <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-3 py-2 rounded">
              {product.status}
            </span>
          )}

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              aria-label={`Add ${product.name} to wishlist`}
            >
              <FaRegHeart size={20} className="text-black" />
            </button>
            <button
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              aria-label={`View details of ${product.name}`}
            >
              <LuEye size={20} className="text-black" />
            </button>
          </div>

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

          <button
            className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-sm md:text-base font-medium font-poppins opacity-0 group-hover:opacity-100 transition"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>

        <div className="mt-[16px]">
          <h2 className="text-sm md:text-base font-medium mb-2">
            {product.name}
          </h2>

          <div className="flex items-center gap-4 font-medium text-sm md:text-base">
            <span className="text-[#DB4444]">${product.price}</span>

            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.floor(safeRating)
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

          {product.colors && (
            <div className="flex gap-2 mt-3">
              {product.colors.map((color, idx) => {
                const isActive = getActiveColor(product) === color;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleColorClick(product.id, color)}
                    aria-pressed={isActive}
                    className={`flex items-center justify-center w-6 h-6 rounded-full border-2 ${
                      isActive ? "border-black" : "border-transparent"
                    }`}
                    title={color}
                  >
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: color,
                        transform: isActive ? "scale(0.9)" : "scale(1)",
                      }}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <section className="main_container top_container">
      <header>
        <SectionHeader label="Our Products" title="Explore Our Products" />
      </header>

      <main className="mt-5 space-y-10">
        <Slider {...settings}>{products.map(renderCard)}</Slider>

        <Slider {...settings}>{moreProduct.map(renderCard)}</Slider>

        <div className="mt-[70px] flex justify-center">
          <button className="btn btn-primary font-poppins">
            View All Products
          </button>
        </div>
      </main>
    </section>
  );
};

export default ExploreOurProducts;
