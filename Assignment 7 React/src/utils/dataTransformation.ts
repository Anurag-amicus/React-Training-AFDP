import type { DummyJsonProduct } from "../types/dummyjson";
import type { Product } from "../types/product";

export function transformProduct(
    product: DummyJsonProduct
): Product {
    return {
        id: product.id,
        name: product.title,
        category: product.category,
        price: product.price,
        imageUrl: product.thumbnail,
        rating: product.rating
    };
}

export function transformProducts(
    products: DummyJsonProduct[]
): Product[] {
    return products.map(transformProduct);
}