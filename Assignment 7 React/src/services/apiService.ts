import type { DummyJsonProductResponse } from "../types/dummyjson";
import { apiRequest } from "../utils/api";

export class ApiService {
    private readonly apiBaseUrl = "https://dummyjson.com";

    async getProducts(options?: RequestInit) {
        return apiRequest<DummyJsonProductResponse>(
            `${this.apiBaseUrl}/products`,
            options
        );
    }
}