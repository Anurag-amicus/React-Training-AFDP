import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Arrow from "./Arrow";

import { Navigation, Pagination } from "swiper/modules";

import ProductCard from "./ProductCard";

import productsData from "../data/products.json";
import { type Product } from "../types/product";

import "./FeaturedCarousel.css";

const products: Product[] = productsData;

function FeaturedCarousel() {
    return (
        <section className="featured-section">
            <div className="featured-container">
                <h2 className="section-heading">Featured Products</h2>

                <div className="featured-carousel">
                    <Arrow
                        direction="left"
                        className="featured-arrow featured-arrow-prev"
                        ariaLabel="Previous products"
                    />

                    <div className="featured-carousel-viewport">
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
