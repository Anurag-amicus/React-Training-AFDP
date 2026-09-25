import type { DummyJsonProduct } from "../types/dummyjson";
import type { Product } from "../types/product";

function isRecentProduct(createdAt?: string): boolean {
    if (!createdAt) {
        return false;
    }

    const createdDate = new Date(createdAt);
    const currentDate = new Date();

    const differenceInMilliseconds =
        currentDate.getTime() - createdDate.getTime();

    const differenceInMonths =
        differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30);

    return differenceInMonths <= 12;
}

export function transformProduct(product: DummyJsonProduct): Product {
    const discountPercentage =
        product.discountPercentage > 10
            ? product.discountPercentage
            : undefined;

    const discountedPrice =
        product.discountPercentage > 10
            ? Number(
                  (
                      product.price -
                      (product.price * product.discountPercentage) / 100
                  ).toFixed(2),
              )
            : undefined;
    return {
        id: product.id,
        name: product.title,
        category: product.category,
        price: product.price,
        discountedPrice,
        discountPercentage: discountPercentage,
        imageUrl: product.thumbnail,
        rating: product.rating,
        isNew: isRecentProduct(product.meta?.createdAt),
    };
}

export function transformProducts(products: DummyJsonProduct[]): Product[] {
    return products.map(transformProduct);
}
