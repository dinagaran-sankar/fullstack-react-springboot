import React from "react";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";
import EmptyCartImage from "../assest/util/emptycart.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Store/cart-Context";
import { useMemo } from "react";
import CartTable from "./CartTable";

const Cart = () => {
  const backToNavigate = useNavigate();

  const { cart } = useCart();
  console.log(cart);

  const isCartEmpty = useMemo(() => cart.length === 0, [cart.length]);
  console.log(isCartEmpty);
  console.log(cart.length);

  // function handleCartClick() {
  //   console.log("navigate user back to home page");
  //   backToNavigate("/home");
  // backToNavigate("/home", {
  //   state: {
  //     username: "dina",
  //   },
  // }); //any data we can send through other current path is /home component
  //backToNavigate("/home", { replace: true }); //contact page then cart page click browser products button
  // it goes to back button to contact page not cart
  //backToNavigate(-1); //back page//backToNavigate(1);//forward page
  //}

  return (
    <div className=" min-h-[383px] mx-auto font-serif py-2">
      <div className="max-w-[882px] mx-auto px-4">
        <PageTitle title="Your Cart"></PageTitle>
        {!isCartEmpty ? (
          <>
            <CartTable />
            <div className="flex justify-between mt-8 space-x-6 [&_a]:!no-underline [&_a]:!text-black">
              <Link
                to="/home"
                className="py-2 px-4 bg-teal-600 text-lg rounded-2  hover:bg-dark transition duration-200"
              >
                Back to Home Page
              </Link>
              <Link
                to="/checkout"
                className="py-2 px-4 bg-yellow-600 text-black text-lg rounded-2  hover:bg-dark transition duration-200"
              >
                Proceed to Payment Checkout
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-600 flex flex-col items-center [&_a]:!no-underline">
            <p className="max-w-[782px] mx-auto mt-2 text-base">
              Oops... Your cart is empty. Continue shopping
            </p>
            <img
              src={EmptyCartImage}
              alt="Empty Cart"
              className="max-w-[300px] mx-auto mb-6"
            />
            <Link
              to="/home"
              className="py-2 px-4 bg-sky-600 text-white text-xl  font-serif rounded-2  hover:bg-dark transition duration-200"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
