"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../../Utilities/SectionHeader/SectionHeader";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755454813/Frame_611_wucpzc.png",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755454812/Frame_612_pbyxds.png",
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    rating: 4.2,
    reviews: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755453877/5e634682db5174aff99bb9337d2dc9598a0b44e4_yhrri7.png",
    price: 370,
    oldPrice: 400,
    discount: "-30%",
    rating: 4.8,
    reviews: 99,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755454811/Frame_614_avam1x.png",
    price: 375,
    oldPrice: 400,
    discount: "-25%",
    rating: 4.6,
    reviews: 99,
  },
  {
    id: 5,
    name: "RGB liquid CPU Cooler",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755460988/Frame_610_qv1hfj.png",
    price: 160,
    oldPrice: 170,
    discount: "-10%",
    rating: 4.6,
    reviews: 65,
  },
  {
    id: 6,
    name: "The north coat",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755460988/Frame_605_yxqvif.png",
    price: 260,
    oldPrice: 360,
    discount: "-25%",
    rating: 4.6,
    reviews: 95,
  },
  {
    id: 7,
    name: "Small BookSelf",
    image:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755460988/Frame_612_1_jk89qb.png",
    price: 360,
    oldPrice: 460,
    discount: "-10%",
    rating: 4.6,
    reviews: 85,
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next products"
    className="hidden lg:block absolute right-0 -top-14 -translate-y-1/2 bg-[#F5F5F5] text-black p-2 rounded-full hover:text-[#DB4444] cursor-pointer"
  >
    <IoMdArrowForward size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous products"
    className="hidden lg:block absolute right-[60px] -top-14 -translate-y-1/2 bg-[#F5F5F5] text-black p-2 rounded-full hover:text-[#DB4444] cursor-pointer"
  >
    <IoMdArrowBack size={24} />
  </button>
);

const FlashSales = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const [time, setTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                clearInterval(timer);
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeParts = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section
      className="main_container top_container"
      aria-labelledby="flash-sales-heading"
    >
      <header className="flex flex-wrap md:flex-nowrap md:justify-between lg:justify-normal gap-5 lg:gap-20">
        <SectionHeader label="Today’s" title="Flash Sales" level={1} />

        <div
          className="flex gap-6 items-center mt-4 md:mt-15"
          aria-label="Flash sale countdown timer"
        >
          {timeParts.map((t, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <span className="text-xs font-poppins font-medium text-black">
                {t.label}
              </span>
              <div className="flex items-center font-inter">
                <time
                  className="text-2xl md:text-[32px] font-bold text-black"
                  dateTime={String(t.value)}
                >
                  {String(t.value).padStart(2, "0")}
                </time>
                {i < timeParts.length - 1 && (
                  <span className="text-[#E07575] text-2xl md:text-[32px] font-bold px-1">
                    :
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </header>

      <Slider {...settings} className="!flex md:mt-5">
        {products.map((product) => (
          <article
            key={product.id}
            className="font-poppins mt-12 px-[15px] cursor-pointer"
            aria-label={product.name}
          >
            <div className="relative group w-auto h-[250px] lg:h-[200px] xl:h-[250px] bg-[#f5f5f5] transition rounded-md overflow-hidden">
              <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-2 rounded">
                {product.discount}
              </span>

              <div className="absolute top-3 right-3 flex flex-col gap-2">
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
                  className="object-cover"
                  priority={product.id === 1}
                />
              </div>

              <button
                className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-sm md:text-base font-medium font-poppins opacity-0 group-hover:opacity-100 transition cursor-pointer"
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
                <span className="text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              </div>

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
      </Slider>

      <div className="mt-[70px] flex justify-center">
        <button className="btn btn-primary font-poppins">
          View All Products
        </button>
      </div>
      <div className="w-full h-[1px] bg-black opacity-10 mt-[70px]"></div>
    </section>
  );
};

export default FlashSales;
