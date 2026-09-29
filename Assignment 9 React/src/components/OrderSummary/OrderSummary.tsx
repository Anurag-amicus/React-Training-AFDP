import Button from "../Button/Button";

import "./OrderSummary.css";

function OrderSummary({
    isFormValid,
    formId = "checkout-form",
}: {
    isFormValid: boolean;
    formId?: string;
}) {
    return (
        <aside className="order-summary">
            <h2>ORDER SUMMARY</h2>

            <div className="order-items">
                <div className="order-item">
                    <h3>Wireless Headphones x2</h3>
                    <span>$99.98</span>
                </div>

                <div className="order-item">
                    <h3>Smart Watch Pro x1</h3>
                    <span>$199.99</span>
                </div>

                <div className="order-item">
                    <h3>USB-C Hub Adapter x3</h3>
                    <span>$104.97</span>
                </div>
            </div>

            <div className="order-totals">
                <div>
                    <span>Subtotal:</span>
                    <span>$404.94</span>
                </div>

                <div>
                    <span>Shipping:</span>
                    <span>$5.00</span>
                </div>

                <div>
                    <span>Tax:</span>
                    <span>$32.40</span>
                </div>

                <div className="order-total">
                    <strong>Total:</strong>
                    <strong>$442.34</strong>
                </div>
            </div>

            <Button
                variant="primary"
                type="submit"
                form={formId}
                className="place-order-button"
                disabled={!isFormValid}
            >
                PLACE ORDER
            </Button>
        </aside>
    );
}

export default OrderSummary;
