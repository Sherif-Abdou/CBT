import React from "react";
import ReactDOM from "react-dom";

import MainWindow from "./components/MainWindow";
import {Provider} from "react-redux";
import store from "./redux";
import {fetchSessions} from "./redux/sessions/actions";


console.log("Hello Land");

// @ts-ignore
store.dispatch(fetchSessions("http://localhost:5000/", fetch))

ReactDOM.render(
    <Provider store={store}>
        <MainWindow/>
    </Provider>,
    document.getElementById("root")
);
