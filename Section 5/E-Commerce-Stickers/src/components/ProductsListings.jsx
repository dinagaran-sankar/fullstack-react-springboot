import React from "react";
import ProductCard from "./ProductCard";

const ProductsListings = ({ products }) => {
  return (
    <div className="max-w-[1125px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="text-center font-bold text-red-800 text-lg font-serif">
            No Record Found
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsListings;
