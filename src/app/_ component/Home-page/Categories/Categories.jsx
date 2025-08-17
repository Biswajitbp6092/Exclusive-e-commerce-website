"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Categories = () => {
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
      aria-labelledby="categories-title"
    >
      <main className="bg-black p-[70px] flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col space-y-[32px] text-center lg:text-left">
          <div>
            <p
              id="categories-title"
              className="text-[#00FF66] font-poppins font-semibold"
            >
              Categories
            </p>
            <h2 className="text-[32px] md:text-[48px] font-semibold font-inter text-white mt-[32px]">
              Enhance Your <br /> Music Experience
            </h2>
          </div>

          <div
            className="flex gap-6 items-center justify-center lg:justify-start"
            aria-label="Flash sale countdown timer"
          >
            {timeParts.map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center 
           font-poppins bg-white rounded-full w-[65px] h-[65px] shadow-md"
              >
                <time
                  className="text-base font-semibold text-black"
                  dateTime={`P${time.days}DT${time.hours}H${time.minutes}M${time.seconds}S`}
                >
                  {String(t.value).padStart(2, "0")}
                </time>
                <span className="text-[11px] font-normal text-black mt-1">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
          <button className="btn btn-secondary w-fit font-poppins mx-auto lg:mx-0">
            Buy Now!
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-white blur-3xl opacity-20" />

          <Image
            src="https://res.cloudinary.com/dildrjzwy/image/upload/v1755466878/Frame_694_c7nwyd.png"
            alt="Music Experience"
            width={550}
            height={350}
            className="relative rounded-lg object-contain"
          />
        </div>
      </main>
    </section>
  );
};

export default Categories;
