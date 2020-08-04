import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreInterface} from "../redux";
import {addSession, fetchSessions} from "../redux/sessions/actions";
import SessionItem from "./SessionItem";
import send_store from "../redux/send_store";
import {toggleSessionStage} from "../redux/session_state/actions";

export default function PreviousSessions() {
    const sessions = useSelector((state: StoreInterface) => state.sessions);
    const dispatch = useDispatch();

    const send_empty_session_closure = () => {
        send_store("http://localhost:5000/", [], fetch)
            .then((res) => console.log(`${res.status}`))
            .catch((err) => console.error(err))
    }

    const new_session = () => {
        dispatch(toggleSessionStage());
    }

    if (sessions.length != 0) {
        (() => {
            send_store("http://localhost:5000/", sessions, fetch)
                .then((res) => {
                    console.log(`${res.status}`);
                })
                .catch((err) => console.error(err))
        })();
    }
    return (
        <div>
            <h3>Previous Sessions</h3>

            <button className="btn" onClick={send_empty_session_closure}>Flush Sessions</button>

            <button className="btn" onClick={new_session}>New Session</button>

            <ul>
                {sessions.map(session => <li key={session.id}><SessionItem session={session}/></li>)}
            </ul>
        </div>
    )
}