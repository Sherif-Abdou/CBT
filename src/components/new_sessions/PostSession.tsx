import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import store, {StoreInterface} from "../../redux";
import {toggleSessionStage, updateTempSession} from "../../redux/session_state/actions";
import {addSession, fetchSessions} from "../../redux/sessions/actions";
import {Session} from "../../redux/types";
import send_store from "../../redux/send_store";

export default function PostSession() {
    const [feelings, setFeelings] = useState("");
    const [score, setScore] = useState(50);
    const sessions = useSelector((state: StoreInterface) => state.sessions);
    const dispatch = useDispatch();
    const temp = useSelector((state: StoreInterface) => state.session_state.temp_session);

    useEffect(() => {
        return (() => {
                send_store("http://localhost:5000/", sessions, fetch)
                    .then((res) => console.log(`${res.status}`))
                    .catch((err) => console.error(err))
            })
    })

    const submit_func =
        () => {
            dispatch(updateTempSession({
                post_feelings: feelings,
                post_score: score,
            }));
            dispatch(addSession(temp as Session));

            dispatch(toggleSessionStage());
        };

    return (
        <form onSubmit={submit_func} className="title">
            <label>
                Type in your current feelings here
                <br />
                <textarea className="text" value={feelings} onChange={(e) => setFeelings(e.target.value)}/>
            </label>
            <br />
            <label>
                Please score your feelings from 1 to 100
                <br />
                <input type="range" min="1" max="100" value={score}
                       onChange={(e) => setScore(parseInt(e.target.value))} />
            </label>

            <input className="btn" type="submit" value={"Finish"} />
        </form>
    )
}