import { useQuery } from "@tanstack/react-query";
import styles from "./doors.module.scss";
import { DoorsHeader } from "./DoorsHeader/DoorsHeader";
import { get_doors } from "../../api/get-doors";
import { useSelector } from "react-redux";
import { SeriesState } from "../../slices/series-slice";
import { useState } from "react";
import { DoorsItem } from "./DoorsItem/DoorsItem";
import { Loader } from "../Loader/Loader";

export const Doors = () => {
    const [sorting, setSorting] = useState<string>("ASC");
    const currentSeries = useSelector((state: { series: SeriesState }) => state.series.selected);
    const doorsQuery = useQuery({
        queryKey: ["get_doors", currentSeries, sorting],
        queryFn: () => get_doors(currentSeries, sorting)
    });
    const changeSorting = (order: string) => {
        setSorting(order);
    }
    return (<>
        <DoorsHeader callback={changeSorting} />
        <div className={styles.grid}>
            {doorsQuery.data && doorsQuery.data.map((x, k) => <DoorsItem data={x} key={k} />)}
        </div>
        {doorsQuery.isLoading && <Loader />}
    </>);
}