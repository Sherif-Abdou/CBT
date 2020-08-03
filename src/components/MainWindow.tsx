import React from "react";
import PreviousSessions from "./PreviousSessions";
import send_store from "../redux/send_store";
import {useDispatch, useSelector} from "react-redux";
import {StoreInterface} from "../redux";
import PreSession from "./new_sessions/PreSession";
import {toggleSessionStage} from "../redux/session_state/actions";
import PostSession from "./new_sessions/PostSession";

function MainWindow() {
    const { sessions, session_state } = useSelector((store: StoreInterface) => store);
    const dispatch = useDispatch();

    let current_element;
    switch (session_state.session_mode) {
        case "None":
            (() => {
                send_store("http://localhost:5000/", sessions, fetch)
                    .then((res) => console.log(`${res.status}`))
                    .catch((err) => console.error(err))
            })();
            current_element = <PreviousSessions />
            break;
        case "Pre":
            current_element = <PreSession />
            break;
        case "Fix":
            // current_element = <p>N/A</p>
            dispatch(toggleSessionStage());
            break;
        case "Post":
            current_element = <PostSession />
            break;
    }

    return (
        <div>
            <h1>CBT</h1>

            {current_element}
        </div>
    );
}

export default MainWindow;
