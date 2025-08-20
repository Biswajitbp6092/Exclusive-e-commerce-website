import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuHeadset } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";

const features = [
  {
    icon: <LiaShippingFastSolid size={28} aria-hidden="true" />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: <LuHeadset size={28} aria-hidden="true" />,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: <GoShieldCheck size={28} aria-hidden="true" />,
    title: "MONEY BACK GUARANTEE",
    desc: "We reurn money within 30 days",
  },
];

const CustomerSupport = () => {
  return (
    <section
      className="main_container top_container font-poppins"
      aria-label="Customer Support and Shopping Benefits"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center font-poppins">
        {features.map((item, idx) => (
          <article key={idx} className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                {item.icon}
              </div>
            </div>

            <h2 className="mt-4 font-semibold text-base sm:text-lg md:text-[20px]">
              {item.title}
            </h2>
            <p className="mt-1 text-black text-sm sm:text-[14px]">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomerSupport;
