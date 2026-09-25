import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import Button from "../../components/Button/Button";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductSkeleton from "../../components/ProductSkeleton/ProductSkeleton";
import SortFilter from "../../components/SortFilter/SortFilter";
import type { SortOption, SortDirection } from "../../types/filterproptypes";

import { type Product } from "../../types/product";

import { ApiService } from "../../services/apiService";
import { transformProducts } from "../../utils/dataTransformation";

import "./ProductListingPage.css";

const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "wearables",
];

const apiService = new ApiService();

function ProductListingPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        []
    );

    const [selectedSort, setSelectedSort] = useState<SortOption | null>(null);
    const [sortDirection, setSortDirection] =
        useState<SortDirection>(null);

    const [searchInput, setSearchInput] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

    const handleSortChange = (sort: SortOption) => {
        setSelectedSort(sort);
        setSortDirection(null);
    };

    const handleClearSort = () => {
        setSelectedSort(null);
        setSortDirection(null);
    };

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(searchInput.trim().toLowerCase());
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [searchInput]);

    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            searchTerm === "" ||
            product.name.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(product.category);

        return matchesSearch && matchesCategory;
    });

    const sortedProducts = [...filteredProducts];

    if (selectedSort && sortDirection) {
        sortedProducts.sort((a, b) => {
            if (selectedSort === "name") {
                const comparison = a.name.localeCompare(b.name);

                return sortDirection === "asc"
                    ? comparison
                    : -comparison;
            }

            if (selectedSort === "price") {
                const comparison = a.price - b.price;

                return sortDirection === "asc"
                    ? comparison
                    : -comparison;
            }

            const comparison = a.rating - b.rating;

            return sortDirection === "asc"
                ? comparison
                : -comparison;
        });
    }

    const sortLabel =
        selectedSort === "name"
            ? "Name"
            : selectedSort === "price"
              ? "Price"
              : selectedSort === "rating"
                ? "Ratings"
                : null;

    const directionLabel =
        sortDirection === "asc"
            ? selectedSort === "name"
                ? "A → Z"
                : "Low to High"
            : sortDirection === "desc"
              ? selectedSort === "name"
                  ? "Z → A"
                  : "High to Low"
              : null;

    return (
        <div className="product-page">
            <Header
                searchTerm={searchInput}
                onSearchChange={setSearchInput}
            />

            <main className="product-listing">
                <div className="listing-heading">
                    <h1>Product Listing</h1>

                    <Button
                        onClick={handleRefresh}
                        className="refresh-button"
                    >
                        Refresh
                    </Button>
                </div>

                <div className="listing-layout">

                    {/* =========================
                        Filter Sidebar
                        ========================= */}

                    <aside
                        className={`filter-sidebar ${
                            filtersOpen ? "filters-open" : ""
                        }`}
                    >
                        <button
                            type="button"
                            className="filter-sidebar-header"
                            onClick={() =>
                                setFiltersOpen((isOpen) => !isOpen)
                            }
                            aria-expanded={filtersOpen}
                        >
                            <span>FILTERS</span>

                            <span className="filter-toggle">
                                {filtersOpen ? "−" : "+"}
                            </span>
                        </button>

                        <div className="filter-sidebar-content">
                            <div className="filter-group">
                                <h3>Category</h3>

                                <CategoryFilter
                                    categories={categories}
                                    selectedCategories={selectedCategories}
                                    onChange={setSelectedCategories}
                                />
                            </div>

                            <div className="filter-group">
                                <h3>Sort by</h3>

                                <SortFilter
                                    selectedSort={selectedSort}
                                    selectedDirection={sortDirection}
                                    onSortChange={handleSortChange}
                                    onDirectionChange={
                                        setSortDirection
                                    }
                                    onClearSort={handleClearSort}
                                />
                            </div>
                        </div>
                    </aside>

                    {/* =========================
                        Product Section
                        ========================= */}

                    <section className="product-section">
                        {!loading && !error && (
                            <div className="product-info">
                                <p className="result-count">
                                    Showing {sortedProducts.length} results
                                    {searchTerm &&
                                        ` for "${searchTerm}"`}
                                </p>

                                {sortLabel && directionLabel && (
                                    <p className="sort-status">
                                        Sorted by:{" "}
                                        <strong>{sortLabel}</strong>{" "}
                                        {directionLabel}
                                    </p>
                                )}
                            </div>
                        )}

                        {loading && (
                            <div className="product-grid">
                                {Array.from({ length: 8 }).map(
                                    (_, index) => (
                                        <ProductSkeleton key={index} />
                                    )
                                )}
                            </div>
                        )}

                        {!loading && error && (
                            <div className="error-state">
                                <p>{error}</p>

                                <Button
                                    onClick={handleRefresh}
                                    className="retry-button"
                                >
                                    Retry
                                </Button>
                            </div>
                        )}

                        {!loading &&
                            !error &&
                            (sortedProducts.length === 0 ? (
                                <div className="empty-state">
                                    <p className="empty-state-title">No products found</p>
                                    <p className="empty-state-message">
                                        Try changing your search or filters.
                                    </p>
                                </div>
                            ) : (
                                <div className="product-grid">
                                    {sortedProducts.map((product) => (
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