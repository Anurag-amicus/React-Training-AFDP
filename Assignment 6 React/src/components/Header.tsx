import Button from "./Button";
import "./Header.css";

function Header() {
    return (
        <header className="site-header">

            {/* =========================
                Header Main
                ========================= */}

            <div className="header-main">

                <button
                    type="button"
                    className="menu-button"
                    aria-label="Open navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>


                <a href="/" className="site-logo">

                    <span className="logo-online">
                        ONLINE
                    </span>

                    <span className="logo-express">
                        EXPRESS
                    </span>

                </a>


                <nav
                    className="site-navigation"
                    aria-label="Main navigation"
                >

                    <a
                        href="/"
                        className="header-navigation-item"
                        aria-label="Search"
                    >
                        <span className="header-icon search-icon">
                            ⌕
                        </span>
                    </a>


                    <a
                        href="/"
                        className="header-navigation-item"
                    >
                        <span className="header-icon">
                            ℹ
                        </span>

                        <span>
                            Sales / Service
                        </span>
                    </a>


                    <a
                        href="/"
                        className="header-navigation-item"
                    >
                        <span className="header-icon">
                            ◉
                        </span>

                        <span>
                            English (United States)
                        </span>
                    </a>


                    <Button
                        variant="primary"
                        className="header-cta"
                    >
                        Shop Now
                    </Button>


                    <a
                        href="/"
                        className="header-navigation-item"
                    >
                        <span>
                            Sign In
                        </span>

                        <span className="sign-in-icon">
                            ↪
                        </span>
                    </a>


                    <a
                        href="/"
                        className="header-navigation-item cart-item"
                    >
                        <span className="cart-icon">
                            🛒
                        </span>

                        <span>
                            0
                        </span>

                        <span className="cart-arrow">
                            »
                        </span>
                    </a>

                </nav>

            </div>

        </header>
    );
}

export default Header;