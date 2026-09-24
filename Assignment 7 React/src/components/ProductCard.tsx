import { useState } from "react";
import { type Product } from "../types/product";
import Card from "./Card";
import Button from "./Button";
import "./ProductCard.css";
import QuantitySelector from "./QuantitySelector";

function ProductCard({
    id,
    name,
    category,
    price,
    imageUrl,
    rating,
}: Product) {

    const [quantity, setQuantity] = useState(1);

    const totalPrice = price * quantity;

    const handleClick = () => {
        console.log(`Added product ${id}: ${name} x ${quantity} to cart.`);
    };

    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <Card variant="elevated" className="product-card">

            {/* Product Image */}
            <div className="product-image-wrapper">
                <img
                    src={imageUrl}
                    alt={name}
                    className="product-image"
                />
            </div>

            {/* Product Content */}
            <div className="product-content">

                {/* Product Name */}
                <div className="product-name">
                    <h2>{name}</h2>
                </div>

                {/* Product Details */}
                <div className="product-details">

                    {/* Category */}
                    <span className="product-category">
                        {category}
                    </span>

                    {/* Rating */}
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

                    {/* Unit Price */}
                    <p className="product-price">
                        ₹{price.toLocaleString("en-IN")}
                    </p>

                    {/* Quantity */}
                    <QuantitySelector
                        quantity={quantity}
                        onChange={setQuantity}
                    />

                    {/* Total Price */}
                    <p className="product-total">
                        Total: ₹{totalPrice.toLocaleString("en-IN")}
                    </p>

                </div>

                {/* Add To Cart */}
                <Button
                    onClick={handleClick}
                    className="add-to-cart-button"
                >
                    ADD TO CART
                </Button>

            </div>

        </Card>
    );
}

export default ProductCard;