import styles from "./mini-series.module.scss";

interface Props {
    id: number;
    title: string;
    price: number;
    active?: boolean;
}

export const MiniSeriesItem = ({ title, price, active }: Props) => {
    const formatter = new Intl.NumberFormat('de');
    return (
        <div className={`${styles.card} ${active && styles.card_active}`}>
            <h3>{title}</h3>
            <span>от {formatter.format(price).replace(".", " ")} ₽</span>
        </div>
    )
};