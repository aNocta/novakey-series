import { Door } from "../../../interfaces/Door";
import styles from "./doors-item.module.scss";

interface PriceProps {
    price: number;
    old_price?: number;
}
const Price = ({ price, old_price }: PriceProps) => {
    const formatter = new Intl.NumberFormat('de');
    if (!old_price) return <span>{formatter.format(price).replace(".", ' ')} ₽</span>;
    return (
        <div className={styles.card__promotional}>
            <span>{formatter.format(price).replace(".", ' ')} ₽</span>
            <del>{formatter.format(old_price).replace(".", ' ')} ₽</del>
        </div>
    );
}

export const DoorsItem = ({ data }: { data: Door }) => {
    const { thumbnail, title, price, link, old_price, id } = data;
    return (
        <article className={styles.card}>
            <button data-id={id}>
                <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.894 1.84616C25.469 -0.968294 20.3754 -0.462053 17.2317 2.66579L16.0005 3.88921L14.7692 2.66579C11.6318 -0.462053 6.53189 -0.968294 3.10696 1.84616C-0.817967 5.07646 -1.02421 10.8741 2.48822 14.3756L14.5817 26.4169C15.363 27.1944 16.6317 27.1944 17.4129 26.4169L29.5065 14.3756C33.0251 10.8741 32.8189 5.07646 28.894 1.84616Z" fill="black" />
                </svg>
            </button>
            <a href={link}>
                <img src={thumbnail} alt={title} draggable="false" loading="lazy" decoding="async" />
            </a>
            <a className={`${styles.card__content}  ${styles.link}`} href={link}>
                <div className={styles.card__header}>
                    <h3 dangerouslySetInnerHTML={{ __html: title }} ></h3>
                    <button>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM0 9H17V7H0V9Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <Price price={price} old_price={old_price} />
            </a>
        </article>
    )
}