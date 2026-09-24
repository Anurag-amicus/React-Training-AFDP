import type { ReactNode } from "react";

export type ButtonProps = {
    variant?: "primary" | "secondary" | "outline" | "danger" | "generic";
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
};

