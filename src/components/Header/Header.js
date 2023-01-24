import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {
    const state = useSelector(state => state.cart)
    return (
        <header className="header container-fluid">
           <nav className="navBar fixed-top">
            <div className="navContainer  grid">
                <div className="navLogo">
                    <Link  to="/">Book Market</Link>
                </div>
                <div className="navLinks">
                        <p className="navLink"><i className="uil uil-shopping-cart cart"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge">
                            {state.cartItems.length}
                        </span>
                        </p>
                </div>
            </div>
           
           </nav>
        </header>

    );
};

export default Header;