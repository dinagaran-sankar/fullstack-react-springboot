import React from "react";
import PageTitle from "./PageTitle";

const About = () => {
  const h3Style = "text-stone-800 text-lg font-semibold";
  const pStyle = "text-gray-600";
  return (
    <div className="max-w-[1152px] mx-auto min-h-[343px] px-6 py-2 font-serif">
      <PageTitle title="About Us" />
      <p className="text-gray-600 leading-6 mb-4">
        <span className="font-semibold font-serif text-gray-600">
          Sticker Shop
        </span>{" "}
        store is an initiative by{" "}
        <span className="font-semibold font-serif text-gray-600">
          Designed by Nelli Groups
        </span>
        , dedicated to offering you the most sought-after stickers and posters !
      </p>

      <h2 className="text-2xl text-stone-800 font-bold mb-6">Why Choose Us?</h2>

      <div className="space-y-6">
        <div>
          <h3 className={h3Style}>Premium Quality</h3>
          <p className={pStyle}>
            We strive to provide every customer with the utmost satisfaction by
            delivering high-quality vinyl stickers crafted with care and
            precision.
          </p>
        </div>

        <div>
          <h3 className={h3Style}>Product Innovation</h3>
          <p className={pStyle}>
            Our vinyl stickers feature a premium matte or glossy finish
            lamination and are made with advanced adhesive technology. Designed
            to withstand all weather conditions and resist scratches, our
            stickers are gentle enough to preserve the surface of your beloved
            gadgets.
          </p>
        </div>

        <div>
          <h3 className={h3Style}>Excellent Service</h3>
          <p className={pStyle}>
            Customer satisfaction is our top priority, and we’re committed to
            delivering an exceptional shopping experience.
          </p>
        </div>

        <div>
          <h3 className={h3Style}>Designs You’ll Love</h3>
          <p className={pStyle}>
            With over 1,000 designs, our collection ranges from relatable and
            seriously funny to delightfully quirky. And we’re just getting
            started—stay tuned for more exciting products and designs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
