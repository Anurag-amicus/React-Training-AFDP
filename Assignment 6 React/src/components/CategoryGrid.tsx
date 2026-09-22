import Button from "./Button";
import "./CategoryGrid.css";

const categories = [
    "Electronics",
    "Fashion",
    "Home",
    "Clothing"
];

function CategoryGrid() {
    return (
        <section className="category-section">

            <div className="category-container">

                <h2 className="section-heading">
                    Shop by Category
                </h2>

                <div className="category-pills">

                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant="outline"
                            className="category-pill"
                        >
                            {category}
                        </Button>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default CategoryGrid;