import Navbar from "./Nav/Navbar";
import Hero from "./Hero/Hero";

import "./Header.css";

const Header = () => {
    return (
        <header id="header">
            <Navbar />
            <Hero />
        </header>
    );
};

export default Header;
