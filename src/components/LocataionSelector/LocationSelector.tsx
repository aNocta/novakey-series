import { ReactNode } from "react";
import styles from "./style.module.scss";

interface LocataionSelectorProps {
  children: ReactNode | ReactNode[];
}
export const LocationSelector = ({ children }: LocataionSelectorProps) => {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
};
