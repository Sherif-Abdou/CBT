import React from "react";
import PreviousSessions from "./PreviousSessions";
import send_store from "../redux/send_store";
import {useDispatch, useSelector} from "react-redux";
import {StoreInterface} from "../redux";
import PreSession from "./new_sessions/PreSession";
import {toggleSessionStage} from "../redux/session_state/actions";
import PostSession from "./new_sessions/PostSession";
import FixSession from "./new_sessions/FixSession";



function MainWindow() {
    const { sessions, session_state } = useSelector((store: StoreInterface) => store);
    const dispatch = useDispatch();

    let current_element;
    switch (session_state.session_mode) {
        case "None":
            current_element = <PreviousSessions />
            break;
        case "Pre":
            current_element = <PreSession />
            break;
        case "Fix":
            current_element = <FixSession />
            break;
        case "Post":
            current_element = <PostSession />
            break;
    }

    return (
        <div className="frame">
            <h1 className="title top-bar green">CBT</h1>
            <br/>

            {current_element}
        </div>
    );
}

export default MainWindow;
