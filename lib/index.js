import { configureStore } from "@reduxjs/toolkit";
import toggleHeaderSlice from "./slices/toggle-header";
import ConfigSlice from "./slices/config";
import fetchUserSlice from "./slices/auth";
import CollocationsSlice from "./slices/collocation";
import phrasalVerbSlice from "./slices/phrasalVerb";
import IdiomsSlice from "./slices/idioms";

export default configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    reducer: {
        toggleHeader: toggleHeaderSlice,
        config: ConfigSlice,
        auth: fetchUserSlice,
        Collocations: CollocationsSlice,
        PhrasalVerb: phrasalVerbSlice,
        Idioms: IdiomsSlice,
    },
});
