import React from 'react';
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {counterSlice} from "../slices/counterSlice";
import {RootState} from "../app/store";

function App() {
    // Get the count value from the state in the store
    const count = useSelector((state: RootState) => state.counter.value)

    // Get the increment and decrement functions from the counterSlice
    const {increment, decrement} = counterSlice.actions;

    // Create a dispatch used to manipulate the state
    const dispatch = useDispatch();

    function handleIncrement() {
        // Dispatch the increment action to the store
        dispatch(increment());
    }

    function handleDecrement() {
        // Dispatch the decrement action to the store
        dispatch(decrement());
    }

    return (
        <div id={'root'}>
            <div id={'counter-text'}>
                {count}
            </div>
            <div>
                <button
                    className={'button green'}
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                <button
                    className={'button red'}
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default App;
