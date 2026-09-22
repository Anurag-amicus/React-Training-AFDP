import "./Header.css";

function Header() {
    return (
        <header className="site-header">

            <a href="/" className="site-logo">
                ONLINE EXPRESS
            </a>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search products..."
                    aria-label="Search products"
                />

                <button type="button">
                    SEARCH
                </button>
            </div>

            <div className="header-actions">
                <span>Sign In</span>
                <span>|</span>
                <span>Cart (3)</span>
            </div>

        </header>
    );
}

export default Header;