import type{ButtonProps}  from "../types/button.js";
import "./Button.css";

function Button({
    variant = "primary",
    children,
    disabled = false,
    onClick
}: ButtonProps) {
    const handleClick = () => {
    console.log(`${children} button was clicked`);

    onClick?.();
    };
    return (
        <button
            className={`button button-${variant}`}
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;