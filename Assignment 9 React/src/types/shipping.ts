export type ShippingMethod =
    | "standard"
    | "express"
    | "overnight";

export interface ShippingFormData {
    fullName: string;
    email: string;
    phone: string;
    streetAddress: string;
    aptSuite: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    shippingMethod: ShippingMethod;
};

export const initialShippingForm: ShippingFormData = {
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    aptSuite: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    shippingMethod: "standard",
};

export type ShippingFormErrors = Partial<
    Record<keyof ShippingFormData, string>
>;

export type ShippingField = keyof ShippingFormData;