import { useDispatch } from "react-redux";
import { SeriesAttributeList } from "../../interfaces/SeriesAttributeList";
import { selectSeries } from "../../slices/series-slice";
import { SeriesAttributes } from "../SeriesAttributes/SeriesAttributes";
import styles from "./series-item.module.scss";

interface Props {
    id: number;
    title: string;
    price?: number;
    image?: string;
    description?: string;
    hideButton?: boolean;
    attributes: SeriesAttributeList;
}

const Price = ({ price }: { price?: number }) => {
    if (!price || price == 0) return <></>;
    const formatter = new Intl.NumberFormat('de');
    return <span className={styles.card__price}>от {formatter.format(price).replace(".", " ")} ₽</span>;
};
export const SeriesItem = ({ title, price, image, attributes, description, id, hideButton }: Props) => {
    //  <SeriesAttributes thickness={attributes.thickness} base_image={attributes.base_image} safety_rating={attributes.safety_rating} sound_absorption={attributes.sound_absorption} />
    const dispatch = useDispatch();
    const select = () => {
        dispatch(selectSeries(id));
    }
    return (
        <div onClick={select} className={styles.card}>
            {image && <img src={image} alt={title} draggable="false" loading="lazy" decoding="async" />}
            <div className={styles.card__content}>
                <div className={styles.card__header}>
                    <div>
                        <h3>{title}</h3>
                        <Price price={price} />
                        {description && <p className={styles.card__description}>{description}</p>}
                    </div>
                    {!hideButton && (
                        <button><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM0 9H17V7H0V9Z" fill="white" />
                        </svg></button>
                    )}
                </div>
                <SeriesAttributes thickness={attributes.thickness} safety_rating={attributes.safety_rating} sound_absorption={attributes.sound_absorption} guarantee={attributes.guarantee} locking_points={attributes.locking_points} lock={attributes.lock} />
            </div>
        </div>
    );
}