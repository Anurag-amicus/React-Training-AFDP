import { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ShippingFormRHF from "../../components/ShippingForm/ShippingFormRHF";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

import "./CheckoutPage.css";

function CheckoutRHFPage() {
    const [isFormValid, setIsFormValid] = useState(false);

    return (
        <div className="checkout-page">
            <Header />

            <main>
                <div className="checkout-page-container">
                    <div className="checkout-breadcrumb">
                        <span>Home</span>
                        <span>&gt;</span>
                        <span>Cart</span>
                        <span>&gt;</span>
                        <span>Checkout</span>
                    </div>

                    <h1 className="checkout-title">Checkout</h1>

                    <div className="checkout-steps">
                        <div className="checkout-step active">
                            <span>1. Shipping</span>
                        </div>

                        <div className="checkout-step-line" />

                        <div className="checkout-step">
                            <span>2. Payment</span>
                        </div>

                        <div className="checkout-step-line" />

                        <div className="checkout-step">
                            <span>3. Review</span>
                        </div>
                    </div>

                    <div className="checkout-layout">
                        <ShippingFormRHF
                            onValidityChange={setIsFormValid}
                        />

                        <OrderSummary
                            isFormValid={isFormValid}
                            formId="checkout-form-rhf"
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default CheckoutRHFPage;