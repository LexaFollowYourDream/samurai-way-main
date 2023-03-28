import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";


export const renderTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}