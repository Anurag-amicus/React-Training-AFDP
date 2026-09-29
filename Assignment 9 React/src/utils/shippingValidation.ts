import type {
    ShippingField,
    ShippingFormData,
    ShippingFormErrors,
} from "../types/shipping";

export function validateField(
    field: ShippingField,
    value: string,
): string | undefined {
    switch (field) {
        case "fullName": {
            const trimmedValue = value.trim();

            if (!trimmedValue) {
                return "Full name is required.";
            }

            if (trimmedValue.length < 3) {
                return "Full name must be at least 3 characters.";
            }

            if (trimmedValue.length > 50) {
                return "Full name must be 50 characters or less.";
            }

            break;
        }

        case "email": {
            const trimmedValue = value.trim();

            if (!trimmedValue) {
                return "Email is required.";
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
                return "Enter a valid email address.";
            }

            break;
        }

        case "phone":
            if (!value.trim()) {
                return "Phone number is required.";
            }

            if (!/^\d{10}$/.test(value)) {
                return "Phone number must contain exactly 10 digits.";
            }

            break;

        case "streetAddress": {
            const trimmedValue = value.trim();

            if (!trimmedValue) {
                return "Street address is required.";
            }

            if (trimmedValue.length < 10) {
                return "Street address must be at least 10 characters.";
            }

            break;
        }

        case "aptSuite":
            break;

        case "country":
            if (!value) {
                return "Country is required.";
            }

            break;

        case "state":
            if (!value) {
                return "State is required.";
            }

            break;

        case "city":
            if (!value) {
                return "City is required.";
            }

            break;

        case "zip":
            if (!value.trim()) {
                return "ZIP code is required.";
            }

            if (!/^[a-zA-Z0-9]{5,6}$/.test(value)) {
                return "ZIP code must contain 5–6 alphanumeric characters.";
            }

            break;

        case "shippingMethod":
            if (!value) {
                return "Shipping method is required.";
            }

            break;
    }

    return undefined;
}

export function validateShippingForm(
    formData: ShippingFormData,
): ShippingFormErrors {
    const errors: ShippingFormErrors = {};

    (Object.keys(formData) as ShippingField[]).forEach((field) => {
        const error = validateField(field, formData[field]);

        if (error) {
            errors[field] = error;
        }
    });

    return errors;
}
