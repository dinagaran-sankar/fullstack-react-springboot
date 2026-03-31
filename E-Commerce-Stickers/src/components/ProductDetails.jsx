import React, { useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHandPointLeft,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Store/cart-Context";

const ProductDetails = () => {
  const params = useParams();
  const fetchingData = useLocation();
  const product = fetchingData.state?.product;
  //If fetchingData.state exists (not null or undefined), then return fetchingData.state.product.
  const [Quantity, setQuantity] = useState(1);
  const cartNavigate = useNavigate();
  const zoomRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const { addToCart } = useCart();

  const handleTotalQuantityEvent = () => {
    if (Quantity < 1) return;
    addToCart(product, Quantity);
  };

  const handleMouseMoveEvent = (e) => {
    const { left, top, width, height } =
      zoomRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
    console.log("mouse moving");
  };
  const handleMouseEnterEvent = () => {
    setIsHovering(true);
    console.log("mouse enter");
  };

  const handleMouseLeaveEvent = () => {
    setIsHovering(false);
    setBackgroundPosition("center");
    console.log("mouse leave");
  };

  function navigateToBackPage() {
    cartNavigate("/cart");
  }

  return (
    <div className="max-w-[1162px] min-h-[283px] flex items-center justify-center font-serif bg-taupe-300 px-2 py-14 ">
      <div className="w-full mx-auto max-w-[838px] flex flex-col p-2 md:flex-row md:space-x-6">
        <div
          ref={zoomRef}
          onMouseMove={isHovering ? handleMouseMoveEvent : null}
          onMouseEnter={handleMouseEnterEvent}
          onMouseLeave={handleMouseLeaveEvent}
          className=" max-w-[838px] w-full border border-taupe-500 rounded-md overflow-hidden bg-cover"
          style={{
            backgroundImage: `url(${product.imageUrl})`,
            backgroundSize: isHovering ? "250%" : "cover",
            backgroundPosition: backgroundPosition,
          }}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full opacity-0"
            // w-full max-w-[888px]  bg-taupe-300 border-gray-500 rounded-sm
          />
        </div>

        <div className="w-full flex flex-col space-y-6 font-serif font-semibold [&_a]:!text-stone-600 [&_a]:!no-underline">
          <Link
            to="/home"
            className="inline flex items-center font-serif hover:text-dark"
          >
            <FontAwesomeIcon icon={faHandPointLeft} className="mr-1" />
            Back to Home
          </Link>
          <div>
            <h1 className="text-3xl font-serif mb-4 text-stone-700 ">
              {product.name}
            </h1>
            <p className="text-lg font-serif font-normal text-stone-800">
              {product.description}
            </p>
            <div className="text-md font-serif text-stone-600">
              ${product.price}
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <label htmlFor="Quantity" className="text-stone-600 text-md">
                Qty:
              </label>
              <input
                type="number"
                name="quantity"
                min="1"
                className="px-2 py-1 w-16 border-1 rounded-md focus:ring focus:ring-dark  text-taupe-600"
                value={Quantity}
                onChange={(e) => {
                  setQuantity(parseInt(e.target.value) || 1);
                }}
              />
            </div>
            <div className="space-y-6 mt-10">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-teal-800 font-serif text-white font-semibold rounded-2 text-lg hover:text-dark transition duration-300 "
                onClick={handleTotalQuantityEvent}
              >
                Add to Cart
                <FontAwesomeIcon icon={faBagShopping} className="ml-2" />
              </button>

              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 bg-teal-800 font-serif text-white font-semibold rounded-2 text-lg hover:text-dark transition duration-300"
                onClick={navigateToBackPage}
              >
                View Cart
                <FontAwesomeIcon icon={faCartShopping} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
