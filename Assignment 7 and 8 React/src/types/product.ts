export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    discountedPrice?: number;
    discountPercentage?: number;
    imageUrl: string;
    rating: number;
    isNew?: boolean;
}