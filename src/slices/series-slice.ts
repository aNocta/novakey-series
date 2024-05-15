import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SeriesState {
    selected: number | null;
};
const initialState: SeriesState = {
    selected: null
}

export const seriesSliceObject = createSlice({
    name: "series_selection",
    initialState,
    reducers: {
        selectSeries(_, action: PayloadAction<number | null>) {
            return { selected: action.payload };
        }
    }
});

export const { selectSeries } = seriesSliceObject.actions;
export default seriesSliceObject.reducer;