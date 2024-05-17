import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux";
import { SeriesState } from "../../slices/series-slice";
import { get_series } from "../../api/get-series";
import styles from "./mini-series.module.scss";
import { MiniSeriesItem } from "./MiniSeriesItem";

export const MiniSeries = () => {
    const location = useSelector((state: { series: SeriesState }) => state.series.currentLocation);
    const selectedSeries = useSelector((state: { series: SeriesState }) => state.series.selected);
    const seriesQuery = useQuery({
        queryKey: ["series", location],
        queryFn: () => get_series(location)
    });
    return (
        <div className={styles.grid}>
            {seriesQuery.data && seriesQuery.data.map((x, k) => <MiniSeriesItem active={selectedSeries == x.id} id={x.id} price={x.min_price} title={x.title} key={k} />)}
        </div>
    )
}