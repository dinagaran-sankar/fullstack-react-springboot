import React from "react";
import Header from "./Header";
import Footer from "./footer/Footer";
import PageTitle from "./PageTitle";
import { Link, useRouteError } from "react-router-dom";
import ErrorImage from "../assest/util/error.png";

const ErrorPage = () => {
  const routeError = useRouteError();
  let errorTitle = "Oops! Something went wrong";
  let errorMessage = "An unexpected error occurred. Please try again later.";
  if (routeError) {
    errorTitle = routeError.status;
    errorMessage = routeError.data;
  }

  return (
    <div className="flex flex-col min-h-[260px]">
      <Header />
      <main className="flex-grow">
        <div className="font-serif bg-taupe-300 text-red-800">
          <div className="max-w-4xl mx-auto text-center">
            <PageTitle title={errorTitle} />
          </div>
          <div className="text-center flex flex-col items-center text-red-800 font-serif font-bold [&_a]:!no-underline">
            <p className="max-w-[575px] px-2 mx-auto leading-6 mb-4">
              {errorMessage}
            </p>
            <img
              className="w-full max-w-[260px] mx-auto mb-8"
              src={ErrorImage}
              alt="ErrorImage"
            />
            <Link
              to="/home"
              className="py-3 px-6 text-white  text-xl rounded-md transition duration-200 bg-red-800 font-semibold"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
