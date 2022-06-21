import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

let initialConfig = {
    darkMode: Cookies.get("config")
        ? JSON.parse(Cookies.get("config")).darkMode
        : true,
};

export const ConfigSlice = createSlice({
    name: "config",
    initialState: {
        ...initialConfig,
    },
    reducers: {
        darkMode: (state) => {
            state.darkMode = !state.darkMode;
            Cookies.set("config", JSON.stringify(initialConfig));
        },
    },
});

// Action creators are generated for each case reducer function
export const { darkMode } = ConfigSlice.actions;

export default ConfigSlice.reducer;
