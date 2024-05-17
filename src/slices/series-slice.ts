import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SeriesState {
    selected: number | null;
    currentLocation: "room" | "house";
};

const initialState: SeriesState = {
    selected: null,
    currentLocation: "room"
}

export const seriesSliceObject = createSlice({
    name: "series_selection",
    initialState,
    reducers: {
        selectSeries(state, action: PayloadAction<number | null>) {
            return { ...state, selected: action.payload };
        },
        selectCurrentLocation(state, action: PayloadAction<"room" | "house">) {
            return { ...state, currentLocation: action.payload };
        }
    }
});

export const { selectSeries, selectCurrentLocation } = seriesSliceObject.actions;
export default seriesSliceObject.reducer;