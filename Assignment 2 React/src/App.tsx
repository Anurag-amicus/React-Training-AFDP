import ProductCard from "./components/ProductCard";
import { type Product } from "./types/product";
import "./App.css";
import productsData from "./data/products.json";
const products: Product[] = productsData;

function App() {
    return (
        <div className="app">

            <header className="site-header">
                <a href="/" className="logo">
                    <span>amicart</span>
                </a>

                <nav className="main-nav" aria-label="Main navigation">
                    <a href="#products">Products</a>
                </nav>
            </header>

            <main>

                <section className="products-section" id="products">
                    <h2>Featured Products</h2>

                    <div className="product-grid">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <p>© 2026 amicart</p>
            </footer>

        </div>
    );
}

export default App;