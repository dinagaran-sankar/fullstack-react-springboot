import React from "react";
import Price from "./Price";
import { Link } from "react-router-dom";
import { CartContext, useCart } from "../Store/cart-Context";
import { useContext } from "react";
import { CartProvider } from "../Store/cart-Context";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="w-72 rounded-md mx-auto border border-black-400 shadow-md overflow-hidden flex flex-col bg-white hover:shadow-lg transition">
      <Link
        to={`/products/${product.productId}`}
        state={{ product }}
        className="relative w-full h-72 border-b border-gray-300"
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </Link>
      <div className="relative h-48 p-3 flex flex-col font-serif text-stone-700">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-base">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="bg-zinc-600 text-white font-semibold font-serif text-sm py-2 px-3 rounded-md ">
            <Price currency="$" price={product.price}></Price>
          </div>
          <button
            className="bg-amber-600 text-white font-semibold font-serif text-lg py-2 px-3 rounded-2"
            onClick={() => addToCart(product, 1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
