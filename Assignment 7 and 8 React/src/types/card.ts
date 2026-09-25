import type { ReactNode } from "react";
import "./Card.css";

export type CardProps = {
    variant?: "elevated" | "bordered" | "flat";
    children: ReactNode;
    className?: string;
};
