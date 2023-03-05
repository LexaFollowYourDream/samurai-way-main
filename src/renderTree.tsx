import {addPost, changeNewTextCallback, RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App appState={state}
             addPost={addPost}
             changeNewTextCallback={changeNewTextCallback}
        />,
        document.getElementById('root')
    );
}