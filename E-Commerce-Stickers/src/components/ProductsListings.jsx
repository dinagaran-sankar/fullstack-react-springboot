import React, { useMemo } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import DropDown from "./DropDown";
import { useState } from "react";
//import { useLoaderData } from "react-router-dom";

const sortBy = ["Popularity", "Price Low to High", "Price High to Low"];

//let searchTextValue = "";

const ProductsListings = ({ products }) => {
  // const products = useLoaderData();
  const [searchProducts, setSearchProducts] = useState("");
  const [sortProducts, setSortProducts] = useState("Popularity");

  const cacheValue = useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }

    let filteringProducts = products.filter(
      (inputValue) =>
        inputValue.name.toLowerCase().includes(searchProducts.toLowerCase()) ||
        inputValue.description
          .toLowerCase()
          .includes(searchProducts.toLowerCase()),
    );

    return filteringProducts.slice().sort((a, b) => {
      switch (sortProducts) {
        case "Price Low to High":
          return parseFloat(a.price) - parseFloat(b.price);

        case "Price High to Low":
          return parseFloat(b.price) - parseFloat(a.price);

        case "Popularity":
        default:
          return parseInt(b.popularity) - parseInt(a.popularity);
      }
    });
  }, [products, searchProducts, sortProducts]);

  function handleSearchChangeEvent(searchInput) {
    //  searchTextValue = searchInput;
    setSearchProducts(searchInput);
    // console.log(searchTextValue);
    // console.log(event);
    console.log(searchProducts);
  }

  function handleSortChangeEvent(sortInput) {
    setSortProducts(sortInput);
    console.log("sort input", sortInput);
  }

  // let searchInputProducts = Array.isArray(products)
  //   ? products.filter((inputValue) => {
  //       return (
  //         inputValue.name
  //           .toLowerCase()
  //           .includes(searchProducts.toLowerCase()) ||
  //         inputValue.description
  //           .toLowerCase()
  //           .includes(searchProducts.toLowerCase())
  //       );
  //     })
  //   : [];
  // //using {} barces return is mandatory if curley braces not specify then it shows retrun not required
  // switch (sortProducts) {
  //   case "Price Low to High":
  //     searchInputProducts = searchInputProducts.sort((a, b) => {
  //       return parseFloat(a.price) - parseFloat(b.price);
  //     });
  //     break;

  //   case "Price High to Low":
  //     searchInputProducts = searchInputProducts.sort((a, b) => {
  //       return parseFloat(b.price) - parseFloat(a.price);
  //     });
  //     break;

  //   case "Popularity":
  //   default:
  //     searchInputProducts = searchInputProducts.sort((a, b) => {
  //       return parseInt(b.popularity) - parseInt(a.popularity);
  //     });
  //     break;
  // }

  return (
    <div className="max-w-[1125px] mx-auto">
      <div className="flex flex-cols flex-sm">
        <SearchBox
          label="Search"
          placeholder="Search Products..."
          //value={searchTextValue}
          value={searchProducts}
          handleSearch={(fetchInput) => handleSearchChangeEvent(fetchInput)}
        ></SearchBox>
        <DropDown
          label="Sort By"
          options={sortBy}
          value={sortProducts}
          handleSort={(fetchSortInput) => handleSortChangeEvent(fetchSortInput)}
        ></DropDown>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 [&_a]:!no-underline">
        {cacheValue.length > 0 ? (
          cacheValue.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="text-center font-bold text-red-800 text-lg font-serif box-border">
            No Record Found
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsListings;
