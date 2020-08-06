import React, {FormEvent, useEffect, useState} from "react";
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


    const submit_func =
        (e: FormEvent) => {
            e.preventDefault()
            dispatch(updateTempSession({
                post_feelings: feelings,
                post_score: score,
            }));
            dispatch(addSession({
                ...temp,
                post_feelings: feelings,
                post_score: score,
            } as Session));

            dispatch(toggleSessionStage());
        };

    return (
        <form onSubmit={submit_func} className="form-item">
            <label>
                Type in your current feelings here
                <br/>
                <br/>
                <textarea className="text" value={feelings} onChange={(e) => setFeelings(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
                Please score your feelings from 1 to 100
                <br/>
                <br/>
                <input type="range" min="1" max="100" value={score}
                       className="slider"
                       onChange={(e) => setScore(parseInt(e.target.value))}/>
            </label>

            <br/>
            <input className="btn btn-submit" type="submit" value={"Finish"}/>
        </form>
    )
}