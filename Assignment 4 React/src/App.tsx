import ProductCard from "./components/ProductCard";
import { type Product } from "./types/product";
import "./App.css";
import productsData from "./data/products.json";

const products: Product[] = productsData;

function App() {
    return (
        <main>
            <section className="products-section">
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
    );
}

export default App;