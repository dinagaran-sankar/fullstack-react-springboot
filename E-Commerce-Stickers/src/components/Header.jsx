import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTags,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CartContext, useCart } from "../Store/cart-Context";
import { useContext, useEffect, useState } from "react";
import { useLogin } from "../Store/login-Context";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Header() {
  const locationPathName = useLocation();

  const navigate = useNavigate();

  const { totalQuantity } = useCart();
  const { isAuthenticated, logout } = useLogin();

  const loginMenuRef = useRef();

  const isLoginAdmin = true;
  const [isLoginMenuOpen, setLoginMenuOpen] = useState(false);
  const [isAdminMenuOpen, setAdminMenuOpen] = useState(false);

  const toggleLoginMenuOpen = () => setLoginMenuOpen((prev) => !prev);
  const toggleAdminLoginMenuOpen = () => setAdminMenuOpen((prev) => !prev);

  useEffect(() => {
    setLoginMenuOpen(false);
    setAdminMenuOpen(false);

    const handleMouseClickEvent = (event) => {
      if (
        loginMenuRef.current &&
        !loginMenuRef.current.contains(event.target)
      ) {
        setAdminMenuOpen(false);
        setLoginMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleMouseClickEvent);
  }, [locationPathName.pathname]);

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
    toast.success("Logout Successfully");
    navigate("/home");
  };

  //uisng plain text only function not es6 ()=>{}
  const navLinkStyleClass = "text-center text-lg font-serif text-black py-3";
  const dropDownStyleClass =
    "block w-full text-left text-md px-3 font-normal font-semibold text-stone-800 py-1 hover:!bg-taupe-500";
  return (
    <header className="border-2 rounded-r-xs rounded-1 border-stone-600 bg-stone-500 sticky top-0 z-20 [&_a]:!no-underline">
      <div className="flex items-center justify-between mx-auto max-w-[1800px] px-6 py-4">
        <Link to="/" className={navLinkStyleClass}>
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span>Sticker Shop</span>
        </Link>
        <nav className="flex items-center py-2 z-10">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => {
                  return isActive
                    ? `text-white ${navLinkStyleClass}`
                    : navLinkStyleClass;
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? `text-white ${navLinkStyleClass}`
                    : navLinkStyleClass;
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive
                    ? `text-white ${navLinkStyleClass}`
                    : navLinkStyleClass;
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              {isAuthenticated ? (
                <div className="relative " ref={loginMenuRef}>
                  <button
                    className="relative text-stone-800"
                    onClick={toggleLoginMenuOpen}
                  >
                    <span className={navLinkStyleClass}>Hello Dina</span>
                    <FontAwesomeIcon
                      icon={faSquareCaretDown}
                      className="text-stone-800 h-6 w-6"
                    />
                  </button>
                  {isLoginMenuOpen && (
                    <div className="absolute right-0 w-36 bg-taupe-300 border border-slate-600 rounded-md shadow-xl transition ease-in-out duration-100 [&_a]:!text-stone-800">
                      <ul className="p-0 m-0 py-2 px-2">
                        <li>
                          <Link to="/profile" className={dropDownStyleClass}>
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/orders" className={dropDownStyleClass}>
                            Orders
                          </Link>
                        </li>
                        {isLoginAdmin && (
                          <li>
                            <button
                              onClick={toggleAdminLoginMenuOpen}
                              className={`${dropDownStyleClass} flex items-center justify-between`}
                            >
                              Admin
                              <FontAwesomeIcon
                                className="h-6 w-6"
                                icon={faSquareCaretDown}
                              />
                            </button>
                            {isAdminMenuOpen && (
                              <ul className="p-0 m-0 px-3">
                                <li>
                                  <Link
                                    to="/adminOrders"
                                    className={dropDownStyleClass}
                                  >
                                    Orders
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/adminMessages"
                                    className={dropDownStyleClass}
                                  >
                                    Messages
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </li>
                        )}
                        <li>
                          <Link
                            to="/home"
                            className={dropDownStyleClass}
                            onClick={handleLogout}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) => {
                    return isActive
                      ? `text-white ${navLinkStyleClass}`
                      : navLinkStyleClass;
                  }}
                >
                  Login
                </NavLink>
              )}
            </li>
            <li>
              <Link
                to="/cart"
                className="relative text-center text-lg font-serif text-black py-3"
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-stone-800 w-6"
                />
                <div className="absolute -top-1 -right-3 px-1 py-1 bg-red-600 text-sm text-white  font-normal rounded-md leading-none">
                  {totalQuantity}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// export function Header1() {
//   return (
//     <header className="header">
//       <div className="container">
//         <a href="/" className="container-shopname">
//           <FontAwesomeIcon icon={faTags} className="fa-icon" />
//           <span className="sticker-shop">Sticker Shop</span>
//         </a>
//         <nav className="nav">
//           <ul>
//             <li>
//               <a href="/" className="navlink">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/about" className="navlink">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="navlink">
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a href="/login" className="navlink">
//                 Login
//               </a>
//             </li>
//             <li>
//               <a href="/cart" className="navlink">
//                 <FontAwesomeIcon icon={faCartShopping} />
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// const Header = ()=>{
//     return (
//        <header className="header">
//          <div className="container">
//             <a href="/"  className="container-shopname">
//                 <FontAwesomeIcon icon={faTags} className='fa-icon' />
//                  <span className="sticker-shop">Sticker Shop</span>
//             </a>
//             <nav className="nav">
//                 <ul>
//                    <li>
//                        <a href="/" className="navlink">Home</a>
//                    </li>
//                    <li>
//                     <a href="/about" className="navlink">About</a>
//                    </li>
//                    <li>
//                     <a href="/contact" className="navlink">Contact</a>
//                    </li>
//                    <li>
//                     <a href="/login" className="navlink">Login</a>
//                    </li>
//                    <li>
//                     <a href="/cart" className="navlink">
//                     <FontAwesomeIcon icon={faCartShopping} />
//                     </a>
//                    </li>
//                 </ul>
//             </nav>
//          </div>
//        </header>
//     );
// }

// const Header1 = ()=>{
//     return (
//        <header className="header">
//          <div className="container">
//             <a href="/"  className="container-shopname">
//                 <FontAwesomeIcon icon={faTags} className='fa-icon' />
//                  <span className="sticker-shop">Sticker Shop</span>
//             </a>
//             <nav className="nav">
//                 <ul>
//                    <li>
//                        <a href="/" className="navlink">Home</a>
//                    </li>
//                    <li>
//                     <a href="/about" className="navlink">About</a>
//                    </li>
//                    <li>
//                     <a href="/contact" className="navlink">Contact</a>
//                    </li>
//                    <li>
//                     <a href="/login" className="navlink">Login</a>
//                    </li>
//                    <li>
//                     <a href="/cart" className="navlink">
//                     <FontAwesomeIcon icon={faCartShopping} />
//                     </a>
//                    </li>
//                 </ul>
//             </nav>
//          </div>
//        </header>
//     );
// }

//export default Header;
//export {Header1};
