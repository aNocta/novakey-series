import { ReactNode } from "react";
import styles from "./style.module.scss";

interface LocationButtonProps {
    icon: ReactNode;
    header: string;
    description: string;
    checked?: boolean;
    location: "room" | "house";
}

export const LocationButton = ({ icon, header, description, checked }: LocationButtonProps) => {
    let additionalClass = "";
    if (checked) {
        additionalClass = styles.active;
    }
    return (
        <button className={`${styles.button} ${additionalClass}`}>
            <h3>{header}</h3>
            <p>{description}</p>
            {icon}
        </button>
    );
}