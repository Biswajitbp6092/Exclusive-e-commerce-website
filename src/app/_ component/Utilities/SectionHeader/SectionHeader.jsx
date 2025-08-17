import React from "react";

const SectionHeader = ({
  label = "Today’s",
  title = "Flash Sales",
  level = 2,
  barColor = "#DB4444",
  labelColor = "#DB4444",
}) => {
  const HeadingTag = `h${level}`;

  return (
    <div>
      <div className="flex items-center gap-3">
        <span
          className="w-6 h-12 block rounded-sm"
          style={{ backgroundColor: barColor }}
          aria-hidden="true"
        ></span>
        <p
          className="text-base font-semibold font-poppins"
          style={{ color: labelColor }}
        >
          {label}
        </p>
      </div>
      <HeadingTag className="text-3xl md:text-4xl font-semibold font-inter text-black mt-7">
        {title}
      </HeadingTag>
    </div>
  );
};

export default SectionHeader;
