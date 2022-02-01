import {createSlice} from "@reduxjs/toolkit";

// Data available in counterSlice state
export interface CounterData {
    value: number
}

// Initial state of the counterSlice
const initialState: CounterData = {
    value: 0,
}

// Counter slice with its reducers
export const counterSlice = createSlice({
    // Name of the slice
    name: 'counter',
    // Initial state
    initialState: initialState,
    // Reducers which allow to modify the state
    reducers: {
        // Increment function which adds 1 to value in the state
        increment: (state) => {
            state.value++;
        },
        // Decrement function which removes 1 from the value in the state
        decrement: (state) => {
            state.value--;
        }
    }
});
