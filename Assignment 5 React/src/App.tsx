import { useState } from "react";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";

import { type Product } from "./types/product";
import productsData from "./data/products.json";

import "./App.css";

const products: Product[] = productsData;

const categories = ["Electronics", "Fashion", "Home", "Clothing"];

function App() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const filteredProducts =
        selectedCategories.length === 0
            ? products
            : products.filter((product) =>
                  selectedCategories.includes(product.category),
              );
    return (
        <div className="app">
            <Header />

            <main className="product-listing">
                <div className="listing-heading">
                    <h1>Product Listing</h1>
                </div>

                <div className="listing-layout">
                    <aside className="filter-sidebar">
                        <h2>FILTERS</h2>

                        <div className="filter-group">
                            <h3>Category</h3>

                            <CategoryFilter
                                categories={categories}
                                selectedCategories={selectedCategories}
                                onChange={setSelectedCategories}
                            />
                        </div>
                    </aside>

                    <section className="product-section">
                        {filteredProducts.length === 0 ? (
                            <div className="empty-state">
                                <p>
                                    No products found for the selected category.
                                </p>
                            </div>
                        ) : (
                            <div className="product-grid">
                                {filteredProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        {...product}
                                    />
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
