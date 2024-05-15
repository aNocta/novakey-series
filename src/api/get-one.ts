import axios from "axios"
import { ISeriesItem } from "../interfaces/ISeriesItem";

export const get_one = async (id: number): Promise<ISeriesItem> => {
    const { data } = await axios.post("https://novakey.ru/wp-json/series-endpoints/series/get", { id });
    return data;
}