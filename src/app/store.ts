import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "../slices/counterSlice";
import {rootReducers} from "../slices";

export const store = configureStore({
    reducer: rootReducers
})
