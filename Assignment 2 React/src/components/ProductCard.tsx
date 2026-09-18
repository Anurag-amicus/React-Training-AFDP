import { type Product } from "../types/product";

function ProductCard({
    id,
    name,
    category,
    price,
    imageUrl,
    rating,
}: Product) {

    const handleClick = () => {
        console.log(`Added product ${id}: ${name} to cart.`);
    };

    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <article className="product-card">

            <div className="product-image-wrapper">
                <img
                    src={imageUrl}
                    alt={name}
                    className="product-image"
                />
            </div>

            <div className="product-content">

                <h2>{name}</h2>

                <span className="product-category">
                    {category}
                </span>

                <div className="product-rating">

                    <span className="stars">
                        {"★".repeat(fullStars)}
                        <span className="empty-stars">
                            {"★".repeat(emptyStars)}
                        </span>
                    </span>

                    <span className="rating-value">
                        {rating.toFixed(1)} (1)
                    </span>

                </div>

                <p className="product-price">
                    ₹{price.toLocaleString("en-IN")}
                </p>

                <button onClick={handleClick}>
                    ADD TO CART
                </button>

            </div>
        </article>
    );
}

export default ProductCard;
