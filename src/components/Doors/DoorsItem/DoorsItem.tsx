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
                <svg width="32" height="27" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
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