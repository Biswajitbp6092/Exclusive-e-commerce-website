import React from "react";
import Image from "next/image";
import "./outer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const footerData = {
  exclusive: {
    logo: "Exclusive",
    subtitle: "Subscribe",
    description: "Get 10% off your first order",
    placeholder: "Enter your email",
  },
  support: {
    title: "Support",
    address: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
    email: "exclusive@gmail.com",
    phone: "+88015-88888-9999",
  },
  account: {
    title: "Account",
    links: [
      { label: "My Account", href: "#" },
      { label: "Login / Register", href: "#" },
      { label: "Cart", href: "#" },
      { label: "Wishlist", href: "#" },
      { label: "Shop", href: "#" },
    ],
  },
  quickLinks: {
    title: "Quick Link",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms Of Use", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  download: {
    title: "Download App",
    description: "Save $3 with App New User Only",
    qrCode:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755713801/Qr_Code_isco7h.png",
    googlePlay:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755714926/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo_yhbxyk.png",
    appStore:
      "https://res.cloudinary.com/dildrjzwy/image/upload/v1755714926/download-appstore_wvrgbu.png",
    socials: [
      { icon: <FaFacebookF size={18} />, href: "#" },
      { icon: <FaTwitter size={18} />, href: "#" },
      { icon: <FaInstagram size={18} />, href: "#" },
      { icon: <FaLinkedinIn size={18} />, href: "#" },
    ],
  },
  copyright: "© Copyright Rimel 2022. All rights reserved.",
};

const Footer = () => {
  return (
    <footer
      className="top_container bg-black text-white"
      aria-labelledby="footer"
    >
      <article className="main_container footer-container">
        <div>
          <h3 className="footer-logo font-inter">
            {footerData.exclusive.logo}
          </h3>
          <p className="logo-subtitle font-poppins">
            {footerData.exclusive.subtitle}
          </p>
          <p className="text-base font-poppins mb-4">
            {footerData.exclusive.description}
          </p>
          <div className="flex items-center border border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder={footerData.exclusive.placeholder}
              className="w-full px-3 py-2 bg-transparent text-sm focus:outline-none"
            />
            <button className=" p-3 transition-colors">
              <IoIosSend size={20} />
            </button>
          </div>
        </div>

        <div className="font-poppins">
          <h3 className="link-title">{footerData.support.title}</h3>
          <p className="text-base font-extralight leading-6">
            {footerData.support.address}
          </p>
          <p className="mt-4 text-base font-extraligh">
            {footerData.support.email}
          </p>
          <p className="mt-4 text-base font-extraligh">
            {footerData.support.phone}
          </p>
        </div>

        <div className="font-poppins">
          <h3 className="link-title font-poppins">
            {footerData.account.title}
          </h3>
          <ul className="link">
            {footerData.account.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className=" font-poppins">
          <h3 className="link-title">{footerData.quickLinks.title}</h3>
          <ul className="link">
            {footerData.quickLinks.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="font-poppins">
          <h3 className="link-title">{footerData.download.title}</h3>
          <p className="text-[12px] text-[#FAFAFA] font-medium mb-3">
            {footerData.download.description}
          </p>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-[80px] h-[80px] flex-shrink-0 bg-amber-600">
              <Image
                src={footerData.download.qrCode}
                alt="QR Code"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-[104px] h-[34px] ">
                <Image
                  src={footerData.download.googlePlay}
                  alt="Google Play"
                  width={104}
                  height={34}
                  className="object-cover"
                />
              </div>
              <div className="w-[104px] h-[34px]">
                <Image
                  src={footerData.download.appStore}
                  alt="App Store"
                  width={104}
                  height={34}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-5">
            {footerData.download.socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 rounded-full bg-[#242424] hover:scale-105 hover:rotate-[20deg] transition-all duration-150"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </article>

      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        {footerData.copyright}
      </div>
    </footer>
  );
};

export default Footer;
