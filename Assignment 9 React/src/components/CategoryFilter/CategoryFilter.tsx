import "./CategoryFilter.css";
import type { CategoryFilterProps } from "../../types/filterproptypes";

function CategoryFilter({
    categories,
    selectedCategories,
    onChange
}: CategoryFilterProps) {

    const handleCategoryChange = (category: string) => {

        if (selectedCategories.includes(category)) {
            onChange(
                selectedCategories.filter(
                    (selectedCategory) => selectedCategory !== category
                )
            );

            return;
        }

        onChange([
            ...selectedCategories,
            category
        ]);
    };

    const handleAllChange = () => {
        onChange([]);
    };

    return (
        <div className="category-filter">

            <label className="category-option">
                <input
                    type="checkbox"
                    checked={selectedCategories.length === 0}
                    onChange={handleAllChange}
                />

                <span>All</span>
            </label>

            {categories.map((category) => (
                <label
                    className="category-option"
                    key={category}
                >
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                    />

                    <span>{category.toLocaleUpperCase()}</span>
                </label>
            ))}

        </div>
    );
}

export default CategoryFilter;