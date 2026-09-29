import type { ButtonProps } from "../../types/button";
import "./Button.css";

function Button({
    variant = "primary",
    children,
    disabled = false,
    onClick,
    className = "",
    type = "button",
    form = "",
}: ButtonProps) {
    const handleClick = () => {
        console.log(`${children} button was clicked`);
        onClick?.();
    };

    return (
        <button
            type={type}
            form={form}
            className={`button button-${variant} ${className}`}
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;