import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTags } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  //uisng plain text only function not es6 ()=>{}
  const navLinkStyleClass =
    "text-center text-lg font-serif text-black py-3 no-underline";
  return (
    <header className="border-2 border-gray-300 bg-gray-400 sticky top-0 z-20">
      <div className="flex items-center justify-between mx-auto max-w-[1800px] px-6 py-4">
        <a href="/" className={navLinkStyleClass}>
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span>Sticker Shop</span>
        </a>
        <nav className="flex items-center py-2 z-10">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className={navLinkStyleClass}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={navLinkStyleClass}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" className={navLinkStyleClass}>
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className={navLinkStyleClass}>
                Login
              </a>
            </li>
            <li>
              <a href="/cart" className={navLinkStyleClass}>
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function Header1() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="container-shopname">
          <FontAwesomeIcon icon={faTags} className="fa-icon" />
          <span className="sticker-shop">Sticker Shop</span>
        </a>
        <nav className="nav">
          <ul>
            <li>
              <a href="/" className="navlink">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="navlink">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="navlink">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="navlink">
                Login
              </a>
            </li>
            <li>
              <a href="/cart" className="navlink">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

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
