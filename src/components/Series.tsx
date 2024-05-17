import { useQuery } from "@tanstack/react-query"
import { get_one } from "../api/get-one";
import { SeriesItem } from "./SeriesItem/SeriesItem";
import { MiniSeries } from "./MiniSeries/MiniSeries";
import { Doors } from "./Doors/Doors";
import { Loader } from "./Loader/Loader";

interface Props {
    id: number;
    location: "room" | "house";
}

export const Series = ({ id, location }: Props) => {
    const { data, isLoading } = useQuery({
        queryKey: ["one-series", id],
        queryFn: () => get_one(id)
    });
    return (
        <div className="app">
            <MiniSeries id={id} location={location} />
            {data && <SeriesItem attributes={{
                thickness: data.thickness,
                guarantee: data.guarantee,
                lock: data.locks,
                locking_points: data.locking_points,
                safety_rating: data.safety_rating,
                sound_absorption: data.sound_absorption,
            }} hideButton={true} id={data.id} title={data.title} description={data.description} image={data.image} price={data.min_price} />}
            {isLoading && <Loader />}
            <Doors id={id} />
        </div>);
}