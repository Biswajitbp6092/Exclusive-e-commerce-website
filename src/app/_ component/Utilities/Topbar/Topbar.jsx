'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const languages = ["English", "Spanish", "French", "German"];

  return (
    <div className="bg-black text-white py-3 text-xs sm:text-sm hidden lg:block">
      <div className="main_container flex items-center justify-between">
        {/* Left spacer (keeps center aligned) */}
        <div className="hidden sm:block w-[100px]" />

        {/* Center text */}
        <p className="flex-1 text-center font-poppins font-normal text-[14px]">
          Summer Sale For All Swim Suits And Free Express Delivery OFF 50%! -{"  "}
          <button className="underline hover:text-gray-300 font-semibold pl-1 cursor-pointer">ShopNow</button>
        </p>

        {/* Right side - Language selector */}
        <div className="w-[100px] flex justify-end relative font-poppins">
          <div
            className="flex items-center space-x-1 cursor-pointer select-none"
            onClick={() => setOpen(!open)}
          >
            <span className="text-sm">{language}</span>
            <FaChevronDown
              size={12}
              className={`transition-transform ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          {/* Dropdown list */}
          {open && (
            <ul className="absolute top-6 right-0 bg-black text-white rounded shadow-md w-28 z-50 font-poppins">
              {languages.map((lang) => (
                <li
                  key={lang}
                  className="px-3 py-2 hover:bg-zinc-700 cursor-pointer"
                  onClick={() => {
                    setLanguage(lang);
                    setOpen(false);
                  }}
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
