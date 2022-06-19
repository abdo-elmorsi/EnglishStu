import { createSlice } from "@reduxjs/toolkit";

export const IdiomsSlice = createSlice({
    name: "idioms",
    initialState: {
        idioms: [],
    },
    reducers: {
        AddIdioms: (state, action) => {
            state.idioms = [...action.payload];
        },
    },
});

export const { AddIdioms } = IdiomsSlice.actions;
export default IdiomsSlice.reducer;
