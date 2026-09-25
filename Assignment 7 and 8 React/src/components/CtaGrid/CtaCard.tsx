import type { ReactNode } from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";

type CtaCardProps = {
    title: string;
    description: string;
    buttonText: string;
    icon?: ReactNode;
    variant?: "elevated" | "bordered" | "flat";
};

function CtaCard({
    title,
    description,
    buttonText,
    icon,
    variant
}: CtaCardProps) {
    return (
        <Card variant={variant}>

            <div className="cta-card">

                {icon && (
                    <div className="cta-card-icon">
                        {icon}
                    </div>
                )}

                <h2>{title}</h2>

                <p>{description}</p>

                <Button
                    variant="primary"
                    className="cta-card-button"
                >
                    {buttonText}
                </Button>

            </div>

        </Card>
    );
}

export default CtaCard;