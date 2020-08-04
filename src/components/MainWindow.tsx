import React from "react";
import PreviousSessions from "./PreviousSessions";
import send_store from "../redux/send_store";
// @ts-ignore
import styles from "../../public/new_style.module.sass";
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
        <div className="frame">
            <h1 className="title top-bar">CBT</h1>
            <br/>

            {current_element}
        </div>
    );
}

export default MainWindow;
