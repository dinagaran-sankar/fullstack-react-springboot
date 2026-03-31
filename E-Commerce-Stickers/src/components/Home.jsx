import { useEffect, useState } from "react";
import PageHeading from "./PageHeading";
import ProductsListings from "./ProductsListings";
import apiClient from "../api/apiClient";
import { useLoaderData, useLocation } from "react-router-dom";

const Home = () => {
  //latest routing route library
  const products = useLoaderData();
  // const location = useLocation();
  // const userName = location.state;
  // const path = location.pathname;
  // console.log(userName);
  // console.log(path);
  //we can use this line to any of the child component as well

  //instead we have used routing route library
  //   const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);

  //   const fetchProducts = async () => {
  //     try {
  //       setLoading(true);
  //       const fetchResponse = await apiClient.get("/products"); //Axios GET Product
  //       setProducts(fetchResponse.data);
  //     } catch (error) {
  //       setError(
  //         error.fetchResponse?.data?.message ||
  //           "Failed to Fetch the Products Details.Please try again..",
  //         //If error.fetchResponse exists, then try to access .data
  //         //If data exists, then try to access .message
  //         //If any part is missing, return undefined safely.
  //         //If no message exists in the error object, show this default message.
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (loading) {
  //     return (
  //       <div className="flex items-center justify-center min-h-screen ">
  //         <span className="font-serif text-xl font-semibold text-emerald-800">
  //           Loading Stickers....
  //         </span>
  //       </div>
  //     );
  //   }

  //   if (error) {
  //     return (
  //       <div className="flex items-center justify-center min-h-screen ">
  //         <span className="font-serif text-xl font-bold text-red-800">
  //           Error: {error}
  //         </span>
  //       </div>
  //     );
  //   }

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

export async function loadingProducts() {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    throw new Response(
      error.response?.data?.errorMessage ||
        error.message ||
        "Failed to Fetch the Products Details.Please try again..",
      {
        status: error.status || 500,
      },
    );
  }
}

export default Home;
