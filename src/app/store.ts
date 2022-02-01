import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {CounterData, counterSlice} from "../slices/counterSlice";

// Root state that combines all the state types in the store
export interface RootState {
    counter: CounterData;
}

// Root reducers that combines all the available reducers in the store
export const rootReducers = combineReducers({
    counter: counterSlice.reducer
})


// Create the store instance in which we specify our reducers
// In this case, its the combination of all our reducers
export const store = configureStore({
    reducer: rootReducers
})
