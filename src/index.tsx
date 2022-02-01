import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from "react-redux";
import {store} from "./app/store";

ReactDOM.render(
    // Wrap the app in Provider with the store instance
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
