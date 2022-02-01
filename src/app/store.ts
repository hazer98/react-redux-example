import {configureStore} from "@reduxjs/toolkit";
import {rootReducers} from "../slices";

// Create the store instance in which we specify our reducers
// In this case, its the combination of all our reducers
export const store = configureStore({
    reducer: rootReducers
})
