"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import './outer.css'

const HeroSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const menuRef = useRef(null);

  // LEFT MENU Categories with links
  const categories = [
    {
      label: "Women’s Fashion",
      subMenu: [
        { name: "Dresses", link: "/womens-fashion/dresses" },
        { name: "Tops & T-Shirts", link: "/womens-fashion/tops" },
        { name: "Sarees", link: "/womens-fashion/sarees" },
        { name: "Kurtis & Ethnic Wear", link: "/womens-fashion/kurtis" },
        { name: "Jeans & Trousers", link: "/womens-fashion/jeans" },
        { name: "Skirts & Shorts", link: "/womens-fashion/skirts" },
        { name: "Jackets & Sweaters", link: "/womens-fashion/jackets" },
        { name: "Footwear", link: "/womens-fashion/footwear" },
        { name: "Bags & Purses", link: "/womens-fashion/bags" },
        { name: "Jewelry & Accessories", link: "/womens-fashion/jewelry" },
      ],
    },
    {
      label: "Men’s Fashion",
      subMenu: [
        { name: "Shirts", link: "/mens-fashion/shirts" },
        { name: "T-Shirts", link: "/mens-fashion/t-shirts" },
        { name: "Jeans", link: "/mens-fashion/jeans" },
        { name: "Trousers", link: "/mens-fashion/trousers" },
        { name: "Jackets", link: "/mens-fashion/jackets" },
        { name: "Shoes", link: "/mens-fashion/shoes" },
        { name: "Watches", link: "/mens-fashion/watches" },
        { name: "Accessories", link: "/mens-fashion/accessories" },
      ],
    },
    { label: "Electronics", subMenu: [] },
    { label: "Home & Lifestyle", subMenu: [] },
    { label: "Medicine", subMenu: [] },
    { label: "Sports & Outdoor", subMenu: [] },
    { label: "Baby’s & Toys", subMenu: [] },
    { label: "Groceries & Pets", subMenu: [] },
    { label: "Health & Beauty", subMenu: [] },
  ];

  // SLIDER DATA
  const sliderData = [
    {
      brandLogo:
        "https://res.cloudinary.com/dildrjzwy/image/upload/v1755380192/1126a357e5011a6f245df4c38eae015c7c9ccbe7_ieu2dn.png",
      brandTitle: "iPhone 14 Series",
      title: "Up to 10% off Voucher",
      buttonText: "Shop Now",
      btnlink: "/shop-now",
      image:
        "https://res.cloudinary.com/dildrjzwy/image/upload/v1755379059/dc40ba897215f42e5883a64157f0aa3a4d1a866a_ohknxl.jpg",
    },
    {
      brandLogo:
        "https://res.cloudinary.com/dildrjzwy/image/upload/v1755380192/1126a357e5011a6f245df4c38eae015c7c9ccbe7_ieu2dn.png",
      brandTitle: "iPhone 14 Series",
      title: "Grab Special Offers Today",
      buttonText: "Explore Deals",
      btnlink: "/offers",
      image:
        "https://res.cloudinary.com/dildrjzwy/image/upload/v1755379059/dc40ba897215f42e5883a64157f0aa3a4d1a866a_ohknxl.jpg",
    },
    {
      brandLogo:
        "https://res.cloudinary.com/dildrjzwy/image/upload/v1755380192/1126a357e5011a6f245df4c38eae015c7c9ccbe7_ieu2dn.png",
      brandTitle: "iPhone 14 Series",
      title: "Grab Special Offers Today",
      buttonText: "Explore Deals",
      btnlink: "/offers",
      image:
        "https://res.cloudinary.com/dildrjzwy/image/upload/v1755379059/dc40ba897215f42e5883a64157f0aa3a4d1a866a_ohknxl.jpg",
    },
    {
      brandLogo:
        "https://res.cloudinary.com/dildrjzwy/image/upload/v1755380192/1126a357e5011a6f245df4c38eae015c7c9ccbe7_ieu2dn.png",
      brandTitle: "iPhone 14 Series",
      title: "Grab Special Offers Today",
      buttonText: "Explore Deals",
      btnlink: "/offers",
      image:
        "https://res.cloudinary.com/dildrjzwy/image/upload/v1755379059/dc40ba897215f42e5883a64157f0aa3a4d1a866a_ohknxl.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Head>
        <title>Online Store - Deals & Promotions</title>
        <meta
          name="description"
          content="Shop the latest fashion, electronics, lifestyle, and more. Grab exclusive deals and discounts on iPhone 14 Series, clothing, footwear, accessories, and much more."
        />
      </Head>

      <section className="main_container flex gap-6 py-6">
        {/* LEFT CATEGORIES MENU */}
        <aside
          ref={menuRef}
          className="w-1/4 bg-white border-r border-gray-200 relative"
          aria-label="Product Categories"
        >
          <nav>
            <ul className="space-y-1 font-poppins text-base font-normal">
              {categories.map((cat, idx) => (
                <li key={idx} className="relative">
                  <button
                    aria-expanded={openIndex === idx}
                    className="flex justify-between items-center w-full py-2 pr-10 cursor-pointer hover:text-[#DB4444] font-medium"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span>{cat.label}</span>
                    {cat.subMenu?.length > 0 && (
                      <FaChevronRight
                        className={`transition-transform duration-300 ${
                          openIndex === idx ? "rotate-190 text-[#DB4444]" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Submenu */}
                  {openIndex === idx && cat.subMenu?.length > 0 && (
                    <ul className="absolute left-full top-0 ml-2 w-60 bg-white shadow-lg border border-[#DB4444] rounded-md z-20">
                      {cat.subMenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.link}
                            className="block px-4 py-2 hover:bg-[#DB4444] hover:text-white"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* RIGHT HERO SLIDER */}
        <div className="w-3/4 hero-slider">
          <Slider {...settings}>
            {sliderData.map((slide, index) => (
              <article key={index} className="px-6">
                <div className="bg-black w-full h-[400px] text-white flex items-center justify-between px-[60px] py-8 rounded-lg">
                  {/* Left Content */}
                  <div>
                    <div className="flex items-center gap-[10px] text-base font-poppins">
                      <Image
                        src={slide.brandLogo}
                        alt={`${slide.brandTitle} logo`}
                        width={60}
                        height={60}
                        priority={index === 0}
                      />
                      <p>{slide.brandTitle}</p>
                    </div>
                    <h1 className="text-[48px] my-4 font-inter font-semibold">
                      {slide.title}
                    </h1>
                    <Link
                      href={slide.btnlink}
                      className="group inline-flex items-center gap-2 py-2 border-b-2 border-zinc-400 font-poppins font-medium text-white"
                    >
                      {slide.buttonText}
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Right Image */}
                  <div className="w-1/2">
                    <Image
                      src={slide.image}
                      alt={`Promotional banner for ${slide.brandTitle}`}
                      width={500}
                      height={400}
                      className="rounded-lg"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
