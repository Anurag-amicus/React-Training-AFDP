import type { ReactNode } from "react";

export type ButtonProps = {
    variant?: "primary" | "secondary" | "outline" | "danger";
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
};

