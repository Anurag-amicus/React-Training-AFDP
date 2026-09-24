import { useEffect, useState } from "react";

import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

import { type Product } from "../types/product";

import { ApiService } from "../services/apiService";
import { transformProducts } from "../utils/dataTransformation";

import "./ProductListingPage.css";

const categories = ["beauty", "fragrances", "furniture", "groceries", "wearables"];

const apiService = new ApiService();

function ProductListingPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const fetchProducts = async (signal: AbortSignal) => {
        setLoading(true);
        setError(null);

        const result = await apiService.getProducts({
            signal,
        });

        if (signal.aborted) {
            return;
        }
        if (!result.success) {
            setError(result.error);
            setLoading(false);
            return;
        }

        const transformedProducts = transformProducts(result.data.products);

        setProducts(transformedProducts);
        setLoading(false);
    };

    const handleRefresh = () => {
        const controller = new AbortController();

        fetchProducts(controller.signal);
    };

    useEffect(() => {
        const controller = new AbortController();

        fetchProducts(controller.signal);

        return () => {
            controller.abort();
        };
    }, []);

    const filteredProducts =
        selectedCategories.length === 0
            ? products
            : products.filter((product) =>
                  selectedCategories.includes(product.category),
              );

    return (
        <div className="product-page">
            <Header />

            <main className="product-listing">
                <div className="listing-heading">
                    <h1>Product Listing</h1>
                    <Button onClick={handleRefresh} className="refresh-button"> Refresh </Button>
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
                        {loading && (
                            <div className="product-grid">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <ProductSkeleton key={index} />
                                ))}
                            </div>
                        )}

                        {!loading && error && (
                            <div className="error-state">
                                <p>{error}</p>

                                <Button onClick={handleRefresh} className="retry-button" >Retry </Button>
                            </div>
                        )}

                        {!loading &&
                            !error &&
                            (filteredProducts.length === 0 ? (
                                <div className="empty-state">
                                    <p>
                                        No products found for the selected
                                        category.
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
                            ))}
                    </section>
                </div>
            </main>
        </div>
    );
}

export default ProductListingPage;
