import type { DummyJsonProductResponse } from "../types/dummyjson";
import type {
    CitiesResponse,
    CountriesResponse,
    StatesResponse,
} from "../types/countriesNow";
import { apiRequest } from "../utils/api";

export class ApiService {
    private readonly dummyJsonBaseUrl = "https://dummyjson.com";
    private readonly countriesNowBaseUrl =
        "https://countriesnow.space/api/v0.1";

    async getProducts(options?: RequestInit) {
        return apiRequest<DummyJsonProductResponse>(
            `${this.dummyJsonBaseUrl}/products`,
            options
        );
    }

    async getCountries(options?: RequestInit) {
        const result = await apiRequest<CountriesResponse>(
            `${this.countriesNowBaseUrl}/countries`,
            options
        );

        if (!result.success) {
            return result;
        }

        if (result.data.error) {
            return {
                success: false as const,
                error: result.data.msg,
            };
        }

        return {
            success: true as const,
            data: result.data.data,
        };
    }

    async getStates(country: string, options?: RequestInit) {
        const result = await apiRequest<StatesResponse>(
            `${this.countriesNowBaseUrl}/countries/states`,
            {
                ...options,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...options?.headers,
                },
                body: JSON.stringify({
                    country,
                }),
            }
        );

        if (!result.success) {
            return result;
        }

        if (result.data.error) {
            return {
                success: false as const,
                error: result.data.msg,
            };
        }

        return {
            success: true as const,
            data: result.data.data.states,
        };
    }

    async getCities(
        country: string,
        state: string,
        options?: RequestInit
    ) {
        const result = await apiRequest<CitiesResponse>(
            `${this.countriesNowBaseUrl}/countries/state/cities`,
            {
                ...options,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...options?.headers,
                },
                body: JSON.stringify({
                    country,
                    state,
                }),
            }
        );

        if (!result.success) {
            return result;
        }

        if (result.data.error) {
            return {
                success: false as const,
                error: result.data.msg,
            };
        }

        return {
            success: true as const,
            data: result.data.data,
        };
    }
}