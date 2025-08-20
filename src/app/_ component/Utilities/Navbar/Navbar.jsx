"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Sign Up", href: "/signup" },
  ];

  return (
    <div className="bg-white border-b border-zinc-300">
      <div className="main_container py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link href={"/"} className="text-2xl font-bold">
            Exclusive
          </Link>

          <ul className="hidden lg:flex space-x-8 font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="cursor-pointer hover:text-gray-500 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="border rounded-full py-2 px-4 pr-10 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>

            <Link
              href="/wishlist"
              className="hover:text-red-500 cursor-pointer"
            >
              <FaHeart size={20} />
            </Link>
            <Link href="/cart" className="hover:text-gray-700 cursor-pointer">
              <FaShoppingCart size={20} />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-full py-2 px-4 pr-10 text-sm w-full focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-30 right-4 h-auto w-[150px] bg-black/15 backdrop-blur-[150px] shadow-xl rounded-[10px] z-50">
          <div className="p-6 space-y-6">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white font-medium hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
