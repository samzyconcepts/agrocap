import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="main-content">
                    <div>
                        <h1>Logo</h1>
                        <div className="sub">
                            <h3>Address</h3>
                            <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                        </div>
                        <div className="sub">
                            <h3>Contact</h3>
                            <a href="#link">(270) 555-0117</a>
                            <a href="#link">info@example.com</a>
                        </div>
                        <div className="sub">
                            <a href="#link">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="#link">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="#link">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="#link">
                                <i className="bx bxl-linkedin-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <ul>
                            <li>Column one</li>
                            <li>
                                <a href="#link">link</a>
                            </li>
                            <li>
                                <a href="#link">link</a>
                            </li>
                            <li>
                                <a href="#link">link</a>
                            </li>
                            <li>
                                <a href="#link">link</a>
                            </li>
                        </ul>
                        <ul>
                            <li>Column two</li>
                            <li>
                                <a href="#link">link</a>
                            </li>
                            <li>
                                <a href="#link">link</a>
                            </li>
                            <li>
                                <a href="#link">link</a>
                            </li>
                            <li>
                                <a href="#link">link</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="copyright">
                    <p>&copy;2022, All right reserved.</p>
                    <div>
                        <a href="#link">Privacy Policy</a>
                        <a href="#link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
