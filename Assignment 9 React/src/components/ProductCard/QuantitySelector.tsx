import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import Button from "../Button/Button";
import "./QuantitySelector.css";

type QuantitySelectorProps = {
    quantity: number;
    onChange: (value: number) => void;
};

function QuantitySelector({ quantity, onChange }: QuantitySelectorProps) {
    const [inputValue, setInputValue] = useState(String(quantity));

    useEffect(() => {
        setInputValue(String(quantity));
    }, [quantity]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        // Allow the input to be temporarily empty.
        if (value === "") {
            setInputValue("");
            return;
        }

        // Allow only whole numbers.
        if (!/^\d+$/.test(value)) {
            return;
        }

        setInputValue(value);

        const numericValue = Number(value);

        if (numericValue >= 1) {
            onChange(numericValue);
        }
    };

    const handleInputBlur = () => {
        if (inputValue === "" || Number(inputValue) < 1) {
            setInputValue("1");
            onChange(1);
        }
    };

    const handleDecrease = () => {
        onChange(Math.max(1, quantity - 1));
    };

    const handleIncrease = () => {
        onChange(quantity + 1);
    };

    return (
        <div className="quantity-selector">
            <Button
                variant="generic"
                className="quantity-button quantity-decrease"
                onClick={handleDecrease}
                disabled={quantity === 1}
            >
                −
            </Button>

            <input
                className="quantity-input"
                type="text"
                inputMode="numeric"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                aria-label="Product quantity"
            />

            <Button
                variant="generic"
                className="quantity-button quantity-increase"
                onClick={handleIncrease}
            >
                +
            </Button>
        </div>
    );
}

export default QuantitySelector;
