import { useEffect, useState } from "react";
import {
    validateField,
    validateShippingForm,
} from "../../utils/shippingValidation";
import { ApiService } from "../../services/apiService";
import {
    initialShippingForm,
    type ShippingField,
    type ShippingFormData,
    type ShippingFormErrors,
} from "../../types/shipping";

import "./ShippingForm.css";

function ShippingFormControlled({
    onValidityChange,
}: {
    onValidityChange: (isValid: boolean) => void;
}) {
    const apiService = new ApiService();

    const [formData, setFormData] =
        useState<ShippingFormData>(initialShippingForm);
    const [errors, setErrors] = useState<ShippingFormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [touchedFields, setTouchedFields] = useState<
        Partial<Record<ShippingField, boolean>>
    >({});
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const [countries, setCountries] = useState<string[]>([]);
    const [states, setStates] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [countriesLoading, setCountriesLoading] = useState(false);
    const [statesLoading, setStatesLoading] = useState(false);
    const [citiesLoading, setCitiesLoading] = useState(false);

    const [countriesError, setCountriesError] = useState("");
    const [statesError, setStatesError] = useState("");
    const [citiesError, setCitiesError] = useState("");

    useEffect(() => {
        const loadCountries = async () => {
            setCountriesLoading(true);
            setCountriesError("");

            const result = await apiService.getCountries();

            if (!result.success) {
                setCountriesError(result.error);
                setCountriesLoading(false);
                return;
            }

            const countryNames = result.data.map((country) => country.country);

            setCountries(countryNames);
            setCountriesLoading(false);
        };

        loadCountries();
    }, []);

    useEffect(() => {
        if (!formData.country) {
            setStates([]);
            setStatesError("");
            return;
        }

        const controller = new AbortController();

        const loadStates = async () => {
            setStatesLoading(true);
            setStatesError("");
            setStates([]);

            const result = await apiService.getStates(formData.country, {
                signal: controller.signal,
            });

            if (controller.signal.aborted) {
                return;
            }

            if (!result.success) {
                setStatesError(result.error);
                setStatesLoading(false);
                return;
            }

            setStates(result.data.map((state) => state.name));

            setStatesLoading(false);
        };

        loadStates();

        return () => {
            controller.abort();
        };
    }, [formData.country]);

    useEffect(() => {
        if (!formData.country || !formData.state) {
            setCities([]);
            setCitiesError("");
            return;
        }

        const controller = new AbortController();

        const loadCities = async () => {
            setCitiesLoading(true);
            setCitiesError("");
            setCities([]);

            const result = await apiService.getCities(
                formData.country,
                formData.state,
                {
                    signal: controller.signal,
                },
            );

            if (controller.signal.aborted) {
                return;
            }

            if (!result.success) {
                setCitiesError(result.error);
                setCitiesLoading(false);
                return;
            }

            setCities(result.data);
            setCitiesLoading(false);
        };

        loadCities();

        return () => {
            controller.abort();
        };
    }, [formData.country, formData.state]);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;

        const updatedFormData = {
            ...formData,
            [name]: value,
        };

        if (name === "country") {
            updatedFormData.state = "";
            updatedFormData.city = "";

            setStates([]);
            setCities([]);
            setStatesError("");
            setCitiesError("");
        }

        if (name === "state") {
            updatedFormData.city = "";

            setCities([]);
            setCitiesError("");
        }

        setFormData(updatedFormData);

        const field = name as keyof ShippingFormData;

        if (touchedFields[field] || submitAttempted) {
            const error = validateField(field, updatedFormData[field]);

            setErrors((previousErrors) => ({
                ...previousErrors,
                ...(error ? { [field]: error } : { [field]: undefined }),
            }));
        }
    };

    const handleBlur = (
        event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;

        const field = name as keyof ShippingFormData;

        setTouchedFields((previous) => ({
            ...previous,
            [field]: true,
        }));

        const error = validateField(field, value);

        setErrors((previousErrors) => ({
            ...previousErrors,
            ...(error ? { [field]: error } : { [field]: undefined }),
        }));
    };

    const isFormValid =
        Object.keys(validateShippingForm(formData)).length === 0;

    useEffect(() => {
        onValidityChange(isFormValid);
    }, [isFormValid, onValidityChange]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validationErrors = validateShippingForm(formData);

        setErrors(validationErrors);

        setSubmitAttempted(true);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        console.log("Order placed successfully:", formData);

        setIsSubmitted(true);
        setFormData(initialShippingForm);
        setErrors({});
        setTouchedFields({});
    };
    return (
        <section className="shipping-form">
            <h2>SHIPPING INFORMATION</h2>
            {isSubmitted && (
                <p className="success-message">
                    Your order has been placed successfully!
                </p>
            )}
            <form id="checkout-form" onSubmit={handleSubmit}>
                <div className="shipping-fields">
                    <div className="form-field">
                        <label htmlFor="fullName">Full Name *</label>

                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.fullName && (
                            <span className="field-error">
                                {errors.fullName}
                            </span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email Address *</label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && (
                            <span className="field-error">{errors.email}</span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="phone">Phone Number *</label>

                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.phone && (
                            <span className="field-error">{errors.phone}</span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="streetAddress">Street Address *</label>

                        <input
                            id="streetAddress"
                            name="streetAddress"
                            type="text"
                            value={formData.streetAddress}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.streetAddress && (
                            <span className="field-error">
                                {errors.streetAddress}
                            </span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="aptSuite">Apartment / Suite</label>

                        <input
                            id="aptSuite"
                            name="aptSuite"
                            type="text"
                            value={formData.aptSuite}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.aptSuite && (
                            <span className="field-error">
                                {errors.aptSuite}
                            </span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="city">City *</label>

                        <select
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            disabled={
                                !formData.country ||
                                !formData.state ||
                                citiesLoading
                            }
                            onBlur={handleBlur}
                        >
                            <option value="">
                                {!formData.country || !formData.state
                                    ? "Select State First"
                                    : citiesLoading
                                      ? "Loading cities..."
                                      : "Select City"}
                            </option>

                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>

                        {citiesError && (
                            <span className="field-error">{citiesError}</span>
                        )}
                        {errors.city && (
                            <span className="field-error">{errors.city}</span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="state">State / Province *</label>

                        <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            disabled={!formData.country || statesLoading}
                            onBlur={handleBlur}
                        >
                            <option value="">
                                {!formData.country
                                    ? "Select Country First"
                                    : statesLoading
                                      ? "Loading states..."
                                      : "Select State"}
                            </option>

                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                        {statesError && (
                            <span className="field-error">{statesError}</span>
                        )}
                        {errors.state && (
                            <span className="field-error">{errors.state}</span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="zip">ZIP / Postal Code *</label>

                        <input
                            id="zip"
                            name="zip"
                            type="text"
                            value={formData.zip}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.zip && (
                            <span className="field-error">{errors.zip}</span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="country">Country *</label>

                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            disabled={countriesLoading}
                            onBlur={handleBlur}
                        >
                            <option value="">
                                {countriesLoading
                                    ? "Loading countries..."
                                    : "Select Country"}
                            </option>

                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>

                        {countriesError && (
                            <span className="field-error">
                                {countriesError}
                            </span>
                        )}
                        {errors.country && (
                            <span className="field-error">
                                {errors.country}
                            </span>
                        )}
                    </div>
                </div>

                <div className="shipping-method">
                    <h3>Shipping Method</h3>

                    <label>
                        <input
                            type="radio"
                            name="shippingMethod"
                            value="standard"
                            checked={formData.shippingMethod === "standard"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        <span>Standard Shipping (5-7 days)</span>

                        <span>$5.00</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="shippingMethod"
                            value="express"
                            checked={formData.shippingMethod === "express"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        <span>Express Shipping (2-3 days)</span>

                        <span>$15.00</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="shippingMethod"
                            value="overnight"
                            checked={formData.shippingMethod === "overnight"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        <span>Overnight Shipping (1 day)</span>

                        <span>$25.00</span>
                    </label>
                    {errors.shippingMethod && (
                        <span className="field-error">
                            {errors.shippingMethod}
                        </span>
                    )}
                </div>
            </form>
        </section>
    );
}

export default ShippingFormControlled;
