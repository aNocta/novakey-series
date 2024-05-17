import { useQuery } from "@tanstack/react-query"
import { get_series } from "../../api/get-series";
import styles from "./mini-series.module.scss";
import { MiniSeriesItem } from "./MiniSeriesItem";
import { Link } from "@tanstack/react-router";

export const MiniSeries = ({ location, id }: { location: string, id: number }) => {
    const seriesQuery = useQuery({
        queryKey: ["series", location],
        queryFn: () => get_series(location)
    });
    return (
        <div className={styles.grid}>
            {seriesQuery.data && seriesQuery.data.map((x, k) => <Link key={`l${k}`} to={`/for-${location}/series/${x.id}`}><MiniSeriesItem active={id == x.id} id={x.id} price={x.min_price} title={x.title} key={k} /></Link>)}
        </div>
    )
}