import React from "react";
import PageHeading from "./PageHeading";
import products from "../data/products";
import ProductsListings from "./ProductsListings";
import EasyButton from "./EasyButton";
import StickerShopButtonBootStrap from "./StickerShopButtonBootStrap";
import developerImage from "../assets/stickers/developer.png";
import breakImage from "../assets/stickers/break.png";

const Home = () => {
  //const isActive = Math.random > 0.5;
  return (
    <div className="max-w-[1152px] mx-auto px-6 py-4">
      <PageHeading title="Explore Sports Stickers!!!...">
        {/* one method */}
        {/* <p className='paragarph-pagaHeading'> */}
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occasion!
        {/* </p> */}
      </PageHeading>
      <ProductsListings products={products}></ProductsListings>
    </div>
  );
};

export default Home;
