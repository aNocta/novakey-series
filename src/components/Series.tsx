import { useQuery } from "@tanstack/react-query"
import { get_one } from "../api/get-one";
import { useSelector } from "react-redux";
import { SeriesState } from "../slices/series-slice";
import { SeriesItem } from "./SeriesItem/SeriesItem";
import { MiniSeries } from "./MiniSeries/MiniSeries";
import { Doors } from "./Doors/Doors";
import { Loader } from "./Loader/Loader";

export const Series = () => {
    const currentSeries = useSelector((state: { series: SeriesState }) => state.series.selected);
    const { data, isLoading } = useQuery({
        queryKey: ["one-series", currentSeries],
        queryFn: () => get_one(currentSeries ?? 0)
    });
    return (
        <div className="app">
            <MiniSeries />
            {data && <SeriesItem attributes={{
                thickness: data.thickness,
                guarantee: data.guarantee,
                lock: data.locks,
                locking_points: data.locking_points,
                safety_rating: data.safety_rating,
                sound_absorption: data.sound_absorption,
            }} hideButton={true} id={data.id} title={data.title} description={data.description} image={data.image} price={data.min_price} />}
            {isLoading && <Loader />}
            <Doors />
        </div>);
}