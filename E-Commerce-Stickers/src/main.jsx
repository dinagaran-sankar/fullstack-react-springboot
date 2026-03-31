import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login, { loginPageDetails } from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { loadingProducts } from "./components/Home.jsx";
import { loadingContactDetails } from "./components/Contact.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./components/ProductDetails.jsx";
import { CartProvider } from "./Store/cart-Context.jsx";
import { LoginStateProvider } from "./Store/login-Context.jsx";
import Checkout from "./components/Checkout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Orders from "./components/Orders.jsx";
import Profile from "./components/Profile.jsx";
import AdminMessages from "./components/admin/AdminMessages.jsx";
import AdminOrders from "./components/admin/AdminOrders.jsx";
import Register, { loadingRegisterDetails } from "./components/Register.jsx";

//recommend way of approach
const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} loader={loadingProducts} />
    <Route path="/home" element={<Home />} loader={loadingProducts} />
    <Route path="/about" element={<About />} />
    <Route
      path="/contact"
      element={<Contact />}
      action={loadingContactDetails}
    />
    <Route path="/login" element={<Login />} action={loginPageDetails} />
    <Route
      path="/register"
      element={<Register />}
      action={loadingRegisterDetails}
    />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:productId" element={<ProductDetails />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/adminOrders" element={<AdminOrders />} />
      <Route path="/adminMessages" element={<AdminMessages />} />
    </Route>
  </Route>,
);

const reRoutingPath = createBrowserRouter(routeDefinitions);

//not recommned for complex
// const reRoutingPath = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginStateProvider>
      <CartProvider>
        <RouterProvider router={reRoutingPath} />
      </CartProvider>
    </LoginStateProvider>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme") === "dark" ? "dark" : "colored"}
      transition={Bounce}
    />
  </StrictMode>,
);
