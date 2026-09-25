import "./SortFilter.css";
import type { SortFilterProps } from "../../types/filterproptypes";

function SortFilter({
    selectedSort,
    selectedDirection,
    onSortChange,
    onDirectionChange,
    onClearSort,
}: SortFilterProps) {
    return (
        <div className="sort-filter">
            {/* =========================
                Name
                ========================= */}

            <div className="sort-option-wrapper">
                <label
                    className={`sort-option ${
                        selectedSort === "name" ? "selected" : ""
                    }`}
                >
                    <input
                        type="radio"
                        name="sort"
                        checked={selectedSort === "name"}
                        onChange={() => onSortChange("name")}
                    />

                    <span className="sort-option-label">Name</span>

                    {selectedSort === "name" && (
                        <button
                            type="button"
                            className="sort-clear"
                            onClick={onClearSort}
                            aria-label="Clear name sort"
                        >
                            ×
                        </button>
                    )}
                </label>

                <div
                    className={`sort-sub-options ${
                        selectedSort === "name" ? "open" : ""
                    }`}
                >
                    <label>
                        <input
                            type="radio"
                            name="name-direction"
                            checked={selectedDirection === "asc"}
                            onChange={() => onDirectionChange("asc")}
                        />

                        <span>A → Z</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="name-direction"
                            checked={selectedDirection === "desc"}
                            onChange={() => onDirectionChange("desc")}
                        />

                        <span>Z → A</span>
                    </label>
                </div>
            </div>

            {/* =========================
                Price
                ========================= */}

            <div className="sort-option-wrapper">
                <label
                    className={`sort-option ${
                        selectedSort === "price" ? "selected" : ""
                    }`}
                >
                    <input
                        type="radio"
                        name="sort"
                        checked={selectedSort === "price"}
                        onChange={() => onSortChange("price")}
                    />

                    <span className="sort-option-label">Price</span>

                    {selectedSort === "price" && (
                        <button
                            type="button"
                            className="sort-clear"
                            onClick={onClearSort}
                            aria-label="Clear price sort"
                        >
                            ×
                        </button>
                    )}
                </label>

                <div
                    className={`sort-sub-options ${
                        selectedSort === "price" ? "open" : ""
                    }`}
                >
                    <label>
                        <input
                            type="radio"
                            name="price-direction"
                            checked={selectedDirection === "asc"}
                            onChange={() => onDirectionChange("asc")}
                        />

                        <span>Low to High</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="price-direction"
                            checked={selectedDirection === "desc"}
                            onChange={() => onDirectionChange("desc")}
                        />

                        <span>High to Low</span>
                    </label>
                </div>
            </div>

            {/* =========================
                Ratings
                ========================= */}

            <div className="sort-option-wrapper">
                <label
                    className={`sort-option ${
                        selectedSort === "rating" ? "selected" : ""
                    }`}
                >
                    <input
                        type="radio"
                        name="sort"
                        checked={selectedSort === "rating"}
                        onChange={() => onSortChange("rating")}
                    />

                    <span className="sort-option-label">Ratings</span>

                    {selectedSort === "rating" && (
                        <button
                            type="button"
                            className="sort-clear"
                            onClick={onClearSort}
                            aria-label="Clear rating sort"
                        >
                            ×
                        </button>
                    )}
                </label>

                <div
                    className={`sort-sub-options ${
                        selectedSort === "rating" ? "open" : ""
                    }`}
                >
                    <label>
                        <input
                            type="radio"
                            name="rating-direction"
                            checked={selectedDirection === "asc"}
                            onChange={() => onDirectionChange("asc")}
                        />

                        <span>Low to High</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="rating-direction"
                            checked={selectedDirection === "desc"}
                            onChange={() => onDirectionChange("desc")}
                        />

                        <span>High to Low</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default SortFilter;
