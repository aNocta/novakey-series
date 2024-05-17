import axios from "axios"
import { Door } from "../interfaces/Door";

export const get_doors = async (series_id: number | null, order: string): Promise<Door[]> => {
    const { data } = await axios.post("https://novakey.ru/wp-json/series-endpoints/series/get_doors", { series_id, order });
    return data;
}