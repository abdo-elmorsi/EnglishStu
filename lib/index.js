import { configureStore } from "@reduxjs/toolkit";
import toggleHeaderSlice from "./slices/toggle-header";
import ConfigSlice from "./slices/config";
import fetchUserSlice from "./slices/auth";

export default configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    reducer: {
        toggleHeader: toggleHeaderSlice,
        config: ConfigSlice,
        auth: fetchUserSlice,
    },
});
