import { ChangeEvent } from "react";
import styles from "./doors-header.module.scss";

interface Props {
    callback: (order: string) => void;
}
export const DoorsHeader = ({ callback }: Props) => {
    const change = (e: ChangeEvent<HTMLSelectElement>) => {
        callback(e.target.value);
    };
    return (<div className={styles.header}>
        <button>
            Фильтр
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0616 0H0.938589C0.105855 0 -0.31434 0.959871 0.275699 1.52041L7.49999 8.38453V16.0312C7.49999 16.3218 7.64925 16.5942 7.89988 16.7609L11.0249 18.8383C11.6414 19.2483 12.5 18.8327 12.5 18.1086V8.38453L19.7245 1.52041C20.3133 0.960984 19.896 0 19.0616 0Z" fill="black" />
            </svg>
        </button>
        <label htmlFor="select-door-sort">
            <select onChange={change} id="select-door-sort">
                <option value="ASC">Сначала дешевле</option>
                <option value="DESC">Сначала дороже</option>
            </select>
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.45593 8.76129L0.225371 2.16119C-0.0751237 1.84287 -0.0751237 1.3268 0.225371 1.00852L0.952066 0.238729C1.25205 -0.0790433 1.73823 -0.0796549 2.03892 0.23737L7.00002 5.46807L11.9611 0.23737C12.2618 -0.0796549 12.748 -0.0790433 13.0479 0.238729L13.7746 1.00852C14.0751 1.32684 14.0751 1.84291 13.7746 2.16119L7.5441 8.76129C7.24361 9.07957 6.75643 9.07957 6.45593 8.76129Z" fill="black" />
            </svg>
        </label>
    </div>);
}