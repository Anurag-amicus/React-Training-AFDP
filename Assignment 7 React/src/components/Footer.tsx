import "./Footer.css";
import cardlogo from "../assets/cardlogo.svg";
import helpcenterlogo from "../assets/helpcenterlogo.svg";
import trucklogo from "../assets/trucklogo.svg";

function Footer() {
    return (
        <footer className="site-footer">

            {/* =========================
                Trust Bar
                ========================= */}

            <div className="footer-trust-bar">

                <div className="footer-trust-container">

                    <div className="footer-trust-item">
                        <div className="footer-trust-icon">
                            <img
                                src={cardlogo}
                                alt=""
                            />
                        </div>

                        <div>
                            <h3>SECURE PAYMENTS</h3>
                            <p>Safe and secure checkout</p>
                        </div>
                    </div>

                    <div className="footer-trust-item">
                        <div className="footer-trust-icon">
                            <img
                                src={helpcenterlogo}
                                alt=""
                            />
                        </div>

                        <div>
                            <h3>HELP CENTER</h3>
                            <p>We're here when you need us</p>
                        </div>
                    </div>

                    <div className="footer-trust-item">
                        <div className="footer-trust-icon">
                            <img
                                src={trucklogo}
                                alt=""
                            />
                        </div>

                        <div>
                            <h3>RELIABLE SHIPPING</h3>
                            <p>Fast and dependable delivery</p>
                        </div>
                    </div>

                </div>

            </div>


            {/* =========================
                Main Footer
                ========================= */}

            <div className="footer-main">

                <div className="footer-main-container">


                    <div className="footer-column">

                        <h3>QUICK LINKS</h3>

                        <a href="/">Home</a>
                        <a href="/">Products</a>
                        <a href="/">Categories</a>
                        <a href="/">About Us</a>
                        <a href="/">Contact</a>

                    </div>


                    <div className="footer-column">

                        <h3>SHOP</h3>

                        <a href="/">Electronics</a>
                        <a href="/">Fashion</a>
                        <a href="/">Home</a>
                        <a href="/">Clothing</a>

                    </div>


                    <div className="footer-column">

                        <h3>SUPPORT</h3>

                        <a href="/">Help Center</a>
                        <a href="/">Shipping Information</a>
                        <a href="/">Returns & Refunds</a>
                        <a href="/">Contact Us</a>

                    </div>


                    <div className="footer-about">

                        <p className="footer-copyright">
                            Copyright © 2026 Online Express
                        </p>

                        <p>
                            Online Express brings quality products
                            together in one simple shopping experience.
                            Discover everyday essentials across
                            electronics, fashion, home and more.
                        </p>

                    </div>

                </div>

            </div>


            {/* =========================
                Bottom Footer
                ========================= */}

            <div className="footer-bottom">

                <div className="footer-bottom-container">

                    <div className="footer-socials">

                        <a href="/" aria-label="Facebook">
                            f
                        </a>

                        <a href="/" aria-label="Instagram">
                            ◎
                        </a>

                        <a href="/" aria-label="LinkedIn">
                            in
                        </a>

                        <a href="/" aria-label="X">
                            X
                        </a>

                        <a href="/" aria-label="YouTube">
                            ▶
                        </a>

                    </div>


                    <div className="footer-legal">

                        <a href="/">Terms of Use</a>

                        <span>|</span>

                        <a href="/">Contact Us</a>

                        <span>|</span>

                        <a href="/">Privacy Policy</a>

                    </div>


                    <a href="/" className="footer-logo">
                        ONLINE EXPRESS
                    </a>

                </div>

            </div>

        </footer>
    );
}

export default Footer;