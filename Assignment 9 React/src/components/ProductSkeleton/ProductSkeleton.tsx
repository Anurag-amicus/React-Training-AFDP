import "./ProductSkeleton.css";

function ProductSkeleton() {
    return (
        <div className="product-skeleton">
            <div className="skeleton-image" />

            <div className="skeleton-content">
                <div className="skeleton-name" />

                <div className="skeleton-details">
                    <div className="skeleton-category" />
                    <div className="skeleton-rating" />
                    <div className="skeleton-price" />
                    <div className="skeleton-button" />
                </div>
            </div>
        </div>
    );
}

export default ProductSkeleton;