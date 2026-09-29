import type { CardProps } from "../../types/card";
import "./Card.css";
function Card({
    variant = "elevated",
    children,
    className = ""
}: CardProps) {

    return (
        <article className={`card card-${variant} ${className}`}>
            {children}
        </article>
    );
}

export default Card;