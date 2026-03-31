import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faTags } from "@fortawesome/free-solid-svg-icons";

class ClassHeader extends Component
{
    render(){
        return(
            <header className="header">
                <div className="container">
                    <a href="/" className="container-shopname">
                        <FontAwesomeIcon icon={faTags} className="fa-icon"/>
                        <span className="sticker-shop">Sport Sticker Shop</span>
                    </a>
                    <nav className="nav">
                    <ul>
                        <li>
                            <a href="/home" className="nav-link">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                        <li>
                            <a href="/login" className="nav-link">Login</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">
                            <FontAwesomeIcon icon={faCartShopping} />
                            </a>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default ClassHeader;

// it is depracted because state management is tough -  understand so many life cycle methods