import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

import Arrow from "../Arrow/Arrow";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";

import { type Product } from "../../types/product";

import { ApiService } from "../../services/apiService";
import { transformProducts } from "../../utils/dataTransformation";

import "./FeaturedCarousel.css";

const apiService = new ApiService();

function FeaturedCarousel() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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

        const transformedProducts = transformProducts(
            result.data.products
        );

        setProducts(transformedProducts);
        setLoading(false);
    };

    const handleRetry = () => {
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

    return (
        <section className="featured-section">
            <div className="featured-container">
                <h2 className="section-heading">
                    Featured Products
                </h2>

                <div className="featured-carousel">
                    <Arrow
                        direction="left"
                        className="featured-arrow featured-arrow-prev"
                        ariaLabel="Previous products"
                    />

                    <div className="featured-carousel-viewport">
                        {loading && (
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={16}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 16,
                                    },
                                    600: {
                                        slidesPerView: 2,
                                        spaceBetween: 16,
                                    },
                                    900: {
                                        slidesPerView: 3,
                                        spaceBetween: 16,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                        spaceBetween: 16,
                                    },
                                }}
                            >
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <SwiperSlide key={index}>
                                        <ProductSkeleton />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

                        {!loading && error && (
                            <div className="featured-error">
                                <p>{error}</p>

                                <Button
                                    className="featured-retry-button"
                                    onClick={handleRetry}
                                >
                                    Retry
                                </Button>
                            </div>
                        )}

                        {!loading && !error && (
                            <Swiper
                                modules={[Navigation, Pagination]}
                                slidesPerView={4}
                                slidesPerGroup={1}
                                spaceBetween={16}
                                loop={true}
                                navigation={{
                                    prevEl: ".featured-arrow-prev",
                                    nextEl: ".featured-arrow-next",
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 16,
                                    },
                                    600: {
                                        slidesPerView: 2,
                                        spaceBetween: 16,
                                    },
                                    900: {
                                        slidesPerView: 3,
                                        spaceBetween: 16,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                        spaceBetween: 16,
                                    },
                                }}
                            >
                                {products.map((product) => (
                                    <SwiperSlide key={product.id}>
                                        <ProductCard {...product} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>

                    <Arrow
                        direction="right"
                        className="featured-arrow featured-arrow-next"
                        ariaLabel="Next products"
                    />
                </div>
            </div>
        </section>
    );
}

export default FeaturedCarousel;