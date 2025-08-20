import React from "react";
import SectionHeader from "../../Utilities/SectionHeader/SectionHeader";

const NewArrival = () => {
  const ProductCard = ({
    title,
    desc,
    img,
    size,
    headingTag: Heading = "h3",
    btnText = "Shop Now",
  }) => {
    return (
      <article
        className={`bg-black p-6 flex flex-col justify-end items-start text-left bg-cover bg-center font-poppins ${size} sm:h-[300px]`}
        style={{ backgroundImage: `url(${img})` }}
        aria-label={title}
      >
        <Heading className="text-[24px] font-semibold text-white">
          {title}
        </Heading>
        <p className="my-3 text-[14px] text-[#FAFAFA] max-w-[250px]">{desc}</p>
        <a
          href="#"
          className="underline underline-offset-8 text-white text-base font-medium"
          aria-label={`${btnText} for ${title}`}
        >
          {btnText}
        </a>
      </article>
    );
  };

  const products = [
    {
      title: "PlayStation 5",
      desc: "Black and White version of the PS5 coming out on sale.",
      img: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755545492/Untitled-1_vg9kce.jpg",
      size: "h-100 md:min-h-[600px]",
      headingTag: "h2",
    },
    {
      title: "Women’s Collections",
      desc: "Featured woman collections that give you another vibe.",
      img: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755545490/Untitled-2_m5bg69.jpg",
      size: "min-h-[284px]",
      headingTag: "h3",
    },
    {
      title: "Speakers",
      desc: "Amazon wireless speakers",
      img: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755545490/Untitled-4_zyhos0.jpg",
      size: "min-h-[284px]",
      headingTag: "h3",
    },
    {
      title: "Perfume",
      desc: "GUCCI INTENSE OUD EDP.",
      img: "https://res.cloudinary.com/dildrjzwy/image/upload/v1755545490/Untitled-3_ofcggd.jpg",
      size: "min-h-[284px]",
    },
  ];

  return (
    <section
      className="main_container top_container py-10"
      aria-labelledby="new-arrival-heading"
    >
      {/* Section Header */}
      <header className="mb-8">
        <SectionHeader
          label="Featured"
          title="New Arrival"
          id="new-arrival-heading"
        />
      </header>

      {/* Main Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Big Image */}
        <ProductCard {...products[0]} />

        {/* Right Side Content */}
        <div className="grid grid-rows-2 gap-6">
          <ProductCard {...products[1]} />

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {products.slice(2).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default NewArrival;
