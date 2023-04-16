import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";



export const renderTree = () => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
                <App store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}


























/*export const renderTree = ()=> {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store}
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}*/
// export const renderTree = () => {
//     const root = ReactDOM.createRoot(
//         document.getElementById('root') as HTMLElement
//     );
//     root.render(<Provider store={store}><App/></Provider>);
// }