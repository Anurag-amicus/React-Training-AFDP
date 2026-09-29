import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { ApiService } from "../../services/apiService";
import {
    initialShippingForm,
    type ShippingFormData,
} from "../../types/shipping";

import "./ShippingForm.css";

function ShippingFormRHF({
    onValidityChange,
}: {
    onValidityChange: (isValid: boolean) => void;
}) {
    const apiService = new ApiService();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors, isValid },
    } = useForm<ShippingFormData>({
        defaultValues: initialShippingForm,
        mode: "onBlur",
    });

    const country = watch("country");
    const state = watch("state");

    const [countries, setCountries] = useState<string[]>([]);
    const [states, setStates] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [countriesLoading, setCountriesLoading] = useState(false);
    const [statesLoading, setStatesLoading] = useState(false);
    const [citiesLoading, setCitiesLoading] = useState(false);

    const [countriesError, setCountriesError] = useState("");
    const [statesError, setStatesError] = useState("");
    const [citiesError, setCitiesError] = useState("");

    const [isSubmitted, setIsSubmitted] = useState(false);

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
        if (!country) {
            setStates([]);
            setCities([]);
            return;
        }

        const controller = new AbortController();

        const loadStates = async () => {
            setStatesLoading(true);
            setStatesError("");
            setStates([]);

            const result = await apiService.getStates(country, {
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

        return () => controller.abort();
    }, [country]);

    useEffect(() => {
        if (!country || !state) {
            setCities([]);
            return;
        }

        const controller = new AbortController();

        const loadCities = async () => {
            setCitiesLoading(true);
            setCitiesError("");
            setCities([]);

            const result = await apiService.getCities(country, state, {
                signal: controller.signal,
            });

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

        return () => controller.abort();
    }, [country, state]);

    useEffect(() => {
        onValidityChange(isValid);
    }, [isValid, onValidityChange]);

    const onSubmit = (data: ShippingFormData) => {
        console.log("Order placed successfully:", data);

        setIsSubmitted(true);
        reset();
    };

    return (
        <section className="shipping-form">
            <h2>SHIPPING INFORMATION RHF</h2>

            {isSubmitted && (
                <p className="success-message">
                    Your order has been placed successfully!
                </p>
            )}

            <form id="checkout-form-rhf" onSubmit={handleSubmit(onSubmit)}>
                <div className="shipping-fields">
                    <div className="form-field">
                        <label htmlFor="fullName">Full Name *</label>

                        <input
                            id="fullName"
                            type="text"
                            {...register("fullName", {
                                required: "Full name is required.",
                                validate: (value) => {
                                    const trimmed = value.trim();

                                    if (trimmed.length < 3) {
                                        return "Full name must be at least 3 characters.";
                                    }

                                    if (trimmed.length > 50) {
                                        return "Full name must be 50 characters or less.";
                                    }

                                    return true;
                                },
                            })}
                        />

                        {errors.fullName && (
                            <span className="field-error">
                                {errors.fullName.message}
                            </span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email Address *</label>

                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required.",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address.",
                                },
                            })}
                        />

                        {errors.email && (
                            <span className="field-error">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="phone">Phone Number *</label>

                        <input
                            id="phone"
                            type="text"
                            {...register("phone", {
                                required: "Phone number is required.",
                                pattern: {
                                    value: /^\d{10}$/,
                                    message:
                                        "Phone number must contain exactly 10 digits.",
                                },
                            })}
                        />

                        {errors.phone && (
                            <span className="field-error">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="streetAddress">Street Address *</label>

                        <input
                            id="streetAddress"
                            type="text"
                            {...register("streetAddress", {
                                required: "Street address is required.",
                                validate: (value) =>
                                    value.trim().length >= 10 ||
                                    "Street address must be at least 10 characters.",
                            })}
                        />

                        {errors.streetAddress && (
                            <span className="field-error">
                                {errors.streetAddress.message}
                            </span>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="aptSuite">Apartment / Suite</label>

                        <input
                            id="aptSuite"
                            type="text"
                            {...register("aptSuite")}
                        />
                    </div>

                    {/* City */}
                    <div className="form-field">
                        <label htmlFor="city">City *</label>

                        <select
                            id="city"
                            {...register("city", {
                                required: "City is required.",
                            })}
                            disabled={!country || !state || citiesLoading}
                        >
                            <option value="">
                                {!country || !state
                                    ? "Select State First"
                                    : citiesLoading
                                      ? "Loading cities..."
                                      : "Select City"}
                            </option>

                            {cities.map((cityName) => (
                                <option key={cityName} value={cityName}>
                                    {cityName}
                                </option>
                            ))}
                        </select>

                        {citiesError && (
                            <span className="field-error">{citiesError}</span>
                        )}

                        {errors.city && (
                            <span className="field-error">
                                {errors.city.message}
                            </span>
                        )}
                    </div>

                    {/* State */}
                    <div className="form-field">
                        <label htmlFor="state">State / Province *</label>

                        <select
                            id="state"
                            {...register("state", {
                                required: "State is required.",
                                onChange: () => {
                                    setValue("city", "");
                                    setCities([]);
                                },
                            })}
                            disabled={!country || statesLoading}
                        >
                            <option value="">
                                {!country
                                    ? "Select Country First"
                                    : statesLoading
                                      ? "Loading states..."
                                      : "Select State"}
                            </option>

                            {states.map((stateName) => (
                                <option key={stateName} value={stateName}>
                                    {stateName}
                                </option>
                            ))}
                        </select>

                        {statesError && (
                            <span className="field-error">{statesError}</span>
                        )}

                        {errors.state && (
                            <span className="field-error">
                                {errors.state.message}
                            </span>
                        )}
                    </div>

                    {/* ZIP */}
                    <div className="form-field">
                        <label htmlFor="zip">ZIP / Postal Code *</label>

                        <input
                            id="zip"
                            type="text"
                            {...register("zip", {
                                required: "ZIP code is required.",
                                pattern: {
                                    value: /^[a-zA-Z0-9]{5,6}$/,
                                    message:
                                        "ZIP code must contain 5–6 alphanumeric characters.",
                                },
                            })}
                        />

                        {errors.zip && (
                            <span className="field-error">
                                {errors.zip.message}
                            </span>
                        )}
                    </div>

                    {/* Country */}
                    <div className="form-field">
                        <label htmlFor="country">Country *</label>

                        <select
                            id="country"
                            {...register("country", {
                                required: "Country is required.",
                                onChange: () => {
                                    setValue("state", "");
                                    setValue("city", "");

                                    setStates([]);
                                    setCities([]);
                                },
                            })}
                            disabled={countriesLoading}
                        >
                            <option value="">
                                {countriesLoading
                                    ? "Loading countries..."
                                    : "Select Country"}
                            </option>

                            {countries.map((countryName) => (
                                <option key={countryName} value={countryName}>
                                    {countryName}
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
                                {errors.country.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="shipping-method">
                    <h3>Shipping Method</h3>

                    <label>
                        <input
                            type="radio"
                            value="standard"
                            {...register("shippingMethod", {
                                required: "Shipping method is required.",
                            })}
                        />

                        <span>Standard Shipping (5-7 days)</span>
                        <span>$5.00</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="express"
                            {...register("shippingMethod")}
                        />

                        <span>Express Shipping (2-3 days)</span>
                        <span>$15.00</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="overnight"
                            {...register("shippingMethod")}
                        />

                        <span>Overnight Shipping (1 day)</span>
                        <span>$25.00</span>
                    </label>

                    {errors.shippingMethod && (
                        <span className="field-error">
                            {errors.shippingMethod.message}
                        </span>
                    )}
                </div>
            </form>
        </section>
    );
}

export default ShippingFormRHF;
