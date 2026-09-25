export type CategoryFilterProps = {
    categories: string[];
    selectedCategories: string[];
    onChange: (categories: string[]) => void;
};

export type SortOption = "name" | "price" | "rating";

export type SortDirection = "asc" | "desc" | null;

export type SortFilterProps = {
    selectedSort: SortOption | null;
    selectedDirection: SortDirection;
    onSortChange: (sort: SortOption) => void;
    onDirectionChange: (direction: SortDirection) => void;
    onClearSort: () => void;
};


export type HeaderProps = {
    searchTerm?: string;
    onSearchChange?: (value: string) => void;
};