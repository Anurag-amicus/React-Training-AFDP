import type { ApiResult } from "../types/api";

export async function apiRequest<T>(
    url: string,
    options?: RequestInit
): Promise<ApiResult<T>> {

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);

            return {
                success: false,
                error: errorData?.message
                    ?? `Request failed with status ${response.status}`
            };
        }

        const data: T = await response.json();

        return {
            success: true,
            data
        };

    } catch (error) {
        return {
            success: false,
            error: error instanceof Error
                ? error.message
                : "Network request failed."
        };
    }
}