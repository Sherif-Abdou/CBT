import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreInterface} from "../redux";
import {addSession, fetchSessions} from "../redux/sessions/actions";
import SessionItem from "./SessionItem";
import send_store from "../redux/send_store";

export default function PreviousSessions() {
    const sessions = useSelector((state: StoreInterface) => state.sessions);
    const dispatch = useDispatch();

    const send_session_closure = () => {
        send_store("http://localhost:5000/", sessions, fetch)
            .then((res) => console.log(`${res.status}`))
            .catch((err) => console.error(err))
    }

    const new_session = () => {
        dispatch(addSession({
            date: new Date(),
            id: Date.now().toString(),
            post_feelings: "Gooder",
            post_score: 20,
            pre_feelings: "Good",
            pre_score: 18
        }));
    }
    console.log(sessions)

    return (
        <div>
            <h3>Previous Sessions</h3>

            <button onClick={send_session_closure}>Send Sessions</button>

            <button onClick={new_session}>New Session</button>

            <ul>
                {sessions.map(session => <li key={session.id}><SessionItem session={session}/></li>)}
            </ul>
        </div>
    )
}