import { useState } from "react";
import { type Product } from "../../types/product";
import Card from "../Card/Card";
import Button from "../Button/Button";
import "./ProductCard.css";
import QuantitySelector from "./QuantitySelector";

function ProductCard({
    id,
    name,
    category,
    price,
    imageUrl,
    discountPercentage,
    rating,
    discountedPrice,
    isNew,
}: Product) {
    const [quantity, setQuantity] = useState(1);
    const unitPrice = discountedPrice ?? price;
    const totalPrice = unitPrice * quantity;

    const handleClick = () => {
        console.log(`Added product ${id}: ${name} x ${quantity} to cart.`);
    };

    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <Card variant="elevated" className="product-card">
            {/* Product Image */}
            <div className="product-image-wrapper">
                <img src={imageUrl} alt={name} className="product-image" />

                {discountedPrice && (
                    <span className="product-badge sale-badge">SALE</span>
                )}

                {isNew && <span className="product-badge new-badge">NEW</span>}
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
                    <span className="product-category">{category}</span>

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
                    <div className="product-price">
                        {discountedPrice ? (
                            <>
                                <span className="current-price">
                                    ₹{discountedPrice.toLocaleString("en-IN")}
                                </span>

                                <span className="original-price">
                                    ₹{price.toLocaleString("en-IN")}
                                </span>

                                <span className="discount-percentage">
                                    ({discountPercentage}% off)
                                </span>
                            </>
                        ) : (
                            <span className="current-price">
                                ₹{price.toLocaleString("en-IN")}
                            </span>
                        )}
                    </div>

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
                <Button onClick={handleClick} className="add-to-cart-button">
                    ADD TO CART
                </Button>
            </div>
        </Card>
    );
}

export default ProductCard;
