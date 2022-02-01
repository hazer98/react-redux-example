import {CounterData, counterSlice} from "./counterSlice";
import {combineReducers} from "@reduxjs/toolkit";

// Root state that combines all the state types in the store
export interface RootState {
    counter: CounterData;
}

// Root reducers that combines all the available reducers in the store
export const rootReducers = combineReducers({
    counter: counterSlice.reducer
})
