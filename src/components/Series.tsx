import { useQuery } from "@tanstack/react-query"
import { get_one } from "../api/get-one";
import { useDispatch, useSelector } from "react-redux";
import { SeriesState, selectSeries } from "../slices/series-slice";
import { SeriesItem } from "./SeriesItem/SeriesItem";

export const Series = () => {
    const currentSeries = useSelector((state: { series: SeriesState }) => state.series.selected);
    const dispatch = useDispatch();
    const backToSeries = () => {
        dispatch(selectSeries(null));
    };
    const { data } = useQuery({
        queryKey: ["one-series", currentSeries],
        queryFn: () => get_one(currentSeries ?? 0)
    });
    return (data && <div className="app"> <SeriesItem attributes={{
        thickness: data.thickness,
        guarantee: data.guarantee,
        lock: data.locks,
        locking_points: data.locking_points,
        safety_rating: data.safety_rating,
        sound_absorption: data.sound_absorption
    }} id={data.id} title={data.title} description={data.description} image={data.image} price={data.min_price} /><button onClick={backToSeries}>Архив серий</button></div>);
}