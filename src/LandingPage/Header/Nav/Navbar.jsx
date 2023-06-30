import logo from "../../../assets/image/logo-black.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <a id="logo" href="#index">
                    <img src={logo} alt="AgroCap logo" />
                </a>
                <div className="navMenu">
                    <ul>
                        <li>
                            <a href="#index">Home</a>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#footer">Contact</a>
                        </li>
                    </ul>

                    <div>
                        <a href="#signIn" className="btn btn-secondary">
                            Sign In
                        </a>
                        <a href="#signIn" className="btn btn-primary">
                            Join now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
