import { ReactNode } from "react";
import styles from "./style.module.scss";

interface LocationButtonProps {
    icon: ReactNode;
    header: string;
    description: string;
    checked?: boolean;
    callback: (location: string) => void;
    location: string;
}

export const LocationButton = ({ icon, header, description, checked, callback, location }: LocationButtonProps) => {
    let additionalClass = "";
    if (checked) {
        additionalClass = styles.active;
    }
    const clickEvent = () => {
        callback(location);
    }
    return (
        <button onClick={clickEvent} className={`${styles.button} ${additionalClass}`}>
            <h3>{header}</h3>
            <p>{description}</p>
            {icon}
        </button>
    );
}