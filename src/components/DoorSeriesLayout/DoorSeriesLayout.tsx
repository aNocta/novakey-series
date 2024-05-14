import { ReactNode } from "react";
import styles from "./style.module.scss";

interface Props {
    children?: ReactNode | ReactNode[]
};

export const DoorSeriesLayout = ({ children }: Props) => {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    );
};