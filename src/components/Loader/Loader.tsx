import styles from "./loader.module.scss";
import loader from "../../assets/loader.gif";

export const Loader = () => {
    return (<div className={styles.loader_box}>
        <div className={styles.loader}>
            <img src={loader} alt="loader" draggable="false" />
        </div>
    </div>)
}