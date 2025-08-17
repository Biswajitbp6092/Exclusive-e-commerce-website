"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../../Utilities/SectionHeader/SectionHeader";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const categories = [
  {
    name: "Phones",
    icon: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755462949/Category-CellPhone_ypldsy.png",
  },
  {
    name: "Computers",
    icon: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755462948/Category-Computer_k1nu8a.png",
  },
  {
    name: "SmartWatch",
    icon: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755462948/Category-SmartWatch_pb80cw.png",
  },
  {
    name: "Camera",
    icon: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755463642/Category-Camera_ylxerl.png",
  },
  {
    name: "Headphones",
    icon: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755462948/Category-Headphone_x8ynfb.png",
  },
  {
    name: "Gaming",
    icon: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755462948/Category-Gamepad_ddsvyk.png",
  },
  {
    name: "Phones",
    icon: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755462949/Category-CellPhone_ypldsy.png",
  },
  {
    name: "SmartWatch",
    icon: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755462948/Category-SmartWatch_pb80cw.png",
  },
  {
    name: "Gaming",
    icon: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755462948/Category-Gamepad_ddsvyk.png",
  },
  {
    name: "SmartWatch",
    icon: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755462948/Category-SmartWatch_pb80cw.png",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next products"
    className="hidden lg:block absolute right-0 -top-18 -translate-y-1/2 bg-[#F5F5F5] text-black p-2 rounded-full hover:text-[#DB4444] cursor-pointer"
  >
    <IoMdArrowForward size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous products"
    className="hidden lg:block absolute right-[60px] -top-18 -translate-y-1/2 bg-[#F5F5F5] text-black p-2 rounded-full hover:text-[#DB4444] cursor-pointer"
  >
    <IoMdArrowBack size={24} />
  </button>
);

const BrowseByCategory = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const activeIndex = 3;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section
      aria-labelledby="browse-by-category"
      className="main_container top_container"
    >
      <SectionHeader label="Categories" title="Browse By Category" />

      <Slider {...settings} className="mt-[60px]">
        {categories.map((cat, i) => {
          const isActive = i === activeIndex && hoveredIndex === null;
          return (
            <div key={i} className="px-2">
              <Link
                href={`/category/${cat.name.toLowerCase()}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group flex flex-col items-center justify-center border border-black/30 rounded-md py-6 transition-all cursor-pointer 
                  ${
                    isActive
                      ? "bg-[#DB4444] text-white"
                      : "bg-white text-black hover:bg-[#DB4444] hover:text-white"
                  }`}
              >
                <Image
                  src={cat.icon}
                  alt={`${cat.name} category`}
                  width={40}
                  height={40}
                  className={`mb-3 transition-all 
                    ${
                      isActive
                        ? "brightness-0 invert"
                        : "group-hover:brightness-0 group-hover:invert"
                    }`}
                />
                <span className="font-poppins text-sm font-medium">
                  {cat.name}
                </span>
              </Link>
            </div>
          );
        })}
      </Slider>
      <div className="w-full h-[1px] bg-black opacity-10 mt-[100px]"></div>
    </section>
  );
};

export default BrowseByCategory;
