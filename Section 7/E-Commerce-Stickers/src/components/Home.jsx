import { useEffect, useState } from "react";
import PageHeading from "./PageHeading";
import ProductsListings from "./ProductsListings";
// import EasyButton from "./EasyButton";
// import StickerShopButtonBootStrap from "./StickerShopButtonBootStrap";
// import developerImage from "../assets/stickers/developer.png";
// import breakImage from "../assets/stickers/break.png";
import apiClient from "../api/apiClient";

const Home = () => {
  //initially product is empty once restapi get invoked then only we were set data into setState.
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // is a external system whenever mounting of the component is happend for the very first time
  //home component is being mounted for the first time
  //during a mount operation we want to make rest api call where the mount is going to happen
  //when i'm trying to load the home page for the very first time
  //to display home page.
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const fetchResponse = await apiClient.get("/products"); //Axios GET Product
      setProducts(fetchResponse.data);
    } catch (error) {
      setError(
        error.fetchResponse?.data?.message ||
          "Failed to Fetch the Products Details.Please try again..",
        //If error.fetchResponse exists, then try to access .data
        //If data exists, then try to access .message
        //If any part is missing, return undefined safely.
        //If no message exists in the error object, show this default message.
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <span className="font-serif text-xl font-semibold text-emerald-800">
          Loading Stickers....
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <span className="font-serif text-xl font-bold text-red-800">
          Error: {error}
        </span>
      </div>
    );
  }

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
