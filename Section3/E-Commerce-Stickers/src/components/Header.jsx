
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping,faTags} from '@fortawesome/free-solid-svg-icons';


export default function  Header()//uisng plain text only function not es6 ()=>{}
{
    return (
       <header className="header">
         <div className="container">
            <a href="/"  className="container-shopname">
                <FontAwesomeIcon icon={faTags} className='fa-icon' />
                 <span className="sticker-shop">Sticker Shop</span>
            </a>
            <nav className="nav-shop">
                <ul>
                   <li>
                       <a href="/" className="navlink">Home</a>
                   </li>
                   <li>
                    <a href="/about" className="navlink">About</a>
                   </li>
                   <li>
                    <a href="/contact" className="navlink">Contact</a>
                   </li>
                   <li>
                    <a href="/login" className="navlink">Login</a>
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

export function Header1()
{
    return (
       <header className="header">
         <div className="container">
            <a href="/"  className="container-shopname">
                <FontAwesomeIcon icon={faTags} className='fa-icon' />
                 <span className="sticker-shop">Sticker Shop</span>
            </a>
            <nav className="nav">
                <ul>
                   <li>
                       <a href="/" className="navlink">Home</a>
                   </li>
                   <li>
                    <a href="/about" className="navlink">About</a>
                   </li>
                   <li>
                    <a href="/contact" className="navlink">Contact</a>
                   </li>
                   <li>
                    <a href="/login" className="navlink">Login</a>
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