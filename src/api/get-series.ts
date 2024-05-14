import axios from "axios";

interface ISeriesItem {
    title: string;
    min_price: number;
    image: string;
    thickness: number;
    sound_absorption: number;
    safety_rating: number;
    base_image: string;
}

export const get_series = async (location: string): Promise<ISeriesItem[]> => {
    const { data } = await axios.post("https://novakey.ru/wp-json/series-endpoints/series/", { location });
    return data;
};