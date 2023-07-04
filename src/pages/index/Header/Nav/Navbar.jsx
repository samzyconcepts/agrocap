import { Link } from "react-router-dom";

import logo from "../../../../assets/image/logo-black.png";

// Navbar CSS
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <Link id="logo" to="/">
                    <img src={logo} alt="AgroCap logo" />
                </Link>
                <div className="navMenu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#footer">Contact</a>
                        </li>
                    </ul>

                    <div className="registerBtn">
                        <Link to="/login" className="btn btn-secondary">
                            Sign In
                        </Link>
                        <Link to="/register" className="btn btn-primary">
                            Join now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
