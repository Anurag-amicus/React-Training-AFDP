import { Link } from "react-router-dom";
import type { HeaderProps } from "../../types/filterproptypes";
import Button from "../Button/Button";

import "./Header.css";

function Header({ searchTerm, onSearchChange }: HeaderProps) {
    return (
        <header className="site-header">
            {/* =========================
                Header Main
                ========================= */}

            <div className="header-main">
                {/* =========================
                    Menu Button
                    ========================= */}

                <button
                    type="button"
                    className="menu-button"
                    aria-label="Open navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* =========================
                    Logo
                    ========================= */}

                <Link to="/home" className="site-logo">
                    <span className="logo-online">ONLINE</span>

                    <span className="logo-express">EXPRESS</span>
                </Link>

                {/* =========================
                    Search
                    ========================= */}

                <div className="header-search">
                    <input
                        type="text"
                        placeholder="Search products..."
                        aria-label="Search products"
                        value={searchTerm}
                        onChange={(event) => onSearchChange?.(event.target.value)}
                    />

                    <button
                        type="button"
                        className="search-button"
                        aria-label="Search"
                    >
                        <span className="search-icon">⌕</span>
                    </button>
                </div>

                {/* =========================
                    Header Navigation
                    ========================= */}

                <nav className="site-navigation" aria-label="Main navigation">
                    <Link to="/products" className="header-navigation-item">
                        <Button variant="primary" className="header-cta">
                            Shop Now
                        </Button>
                    </Link>

                    <Link to="/home" className="header-navigation-item sign-in">
                        <span>Sign In</span>

                        <span className="sign-in-icon">↪</span>
                    </Link>

                    <button
                        type="button"
                        className="cart-item"
                        aria-label="Shopping cart"
                    >
                        <span className="cart-icon">🛒</span>

                        <span className="cart-count">0</span>
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
