import { useDispatch } from "react-redux";
import styles from "./mini-series.module.scss";
import { selectSeries } from "../../slices/series-slice";

interface Props {
    id: number;
    title: string;
    price: number;
    active?: boolean;
}

export const MiniSeriesItem = ({ id, title, price, active }: Props) => {
    const dispatch = useDispatch();
    const selectIt = () => {
        dispatch(selectSeries(id));
    }
    const formatter = new Intl.NumberFormat('de');
    return (
        <div onClick={selectIt} className={`${styles.card} ${active && styles.card_active}`}>
            <h3>{title}</h3>
            <span>от {formatter.format(price).replace(".", " ")} ₽</span>
        </div>
    )
};