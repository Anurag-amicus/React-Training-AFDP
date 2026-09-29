import CtaCard from "./CtaCard";
import "./CtaGrid.css";

function CtaGrid() {
    return (
        <section className="cta-section">

            <div className="cta-container">

                <CtaCard
                    variant="elevated"
                    title="Shop Products"
                    description="Browse our collection of quality products for everyday needs."
                    buttonText="Shop Now"
                />

                <CtaCard
                    variant="flat"
                    title="New Arrivals"
                    description="Discover the latest products added to our collection."
                    buttonText="Explore"
                />

                <CtaCard
                    variant="elevated"
                    title="Featured Items"
                    description="Take a look at some of our most popular products."
                    buttonText="View Items"
                />

                <CtaCard
                    variant="flat"
                    title="Special Offers"
                    description="Find selected products and discover great deals."
                    buttonText="View Offers"
                />

            </div>

        </section>
    );
}

export default CtaGrid;