import styles from "./series-attributes.module.scss";
import { SeriesAttributeList } from "../../interfaces/SeriesAttributeList";

const getColorByNumber = (num: number): string => {
    if (num <= 60) return "#ecd4b8";
    else if (num <= 75) return "#ebecb8"

    return "#b8ecba";
}

export const SeriesAttributes = ({ thickness, sound_absorption, safety_rating, base_image }: SeriesAttributeList) => {
    return (
        <div className={styles.grid}>
            <div className={styles.attribute}>
                <div className={styles.attribute_bage}><span>{thickness}</span>мм</div>
                <span>Толщина стали</span>
            </div>
            <div className={styles.attribute}>
                <div className={styles.attribute_bage}><span>{sound_absorption}</span>дБ</div>
                <span>Звукопогло
                    щение</span>
            </div>
            <div className={styles.attribute}>
                <div className={styles.attribute_bage} style={{ backgroundColor: getColorByNumber(safety_rating) }}><span>{safety_rating}</span></div>
                <span>Звукопогло
                    щение</span>
            </div>
            <div className={styles.attribute}>
                <div className={styles.attribute_bage}><img src={base_image} draggable="false" loading="lazy" decoding="async" /></div>
                <span>Звукопогло
                    щение</span>
            </div>
        </div>
    );
}