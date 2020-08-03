import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreInterface} from "../redux";
import {fetchSessions} from "../redux/sessions/actions";

export default function PreviousSessions() {
    const sessions = useSelector((state: StoreInterface) => state.sessions);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Previous Sessions</h3>
            <ul>
                {sessions.map(ses => <li key={ses.id}>{ses.date.getDay()}</li>)}
            </ul>
        </div>
    )
}