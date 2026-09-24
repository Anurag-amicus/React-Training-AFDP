export interface DummyJsonProduct {
    id: number;
    title: string;
    category: string;
    price: number;
    rating: number;
    thumbnail: string;
}

export interface DummyJsonProductResponse {
    products: DummyJsonProduct[];
    total: number;
    skip: number;
    limit: number;
}
