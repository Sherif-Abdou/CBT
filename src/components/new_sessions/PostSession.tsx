import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import store, {StoreInterface} from "../../redux";
import {toggleSessionStage, updateTempSession} from "../../redux/session_state/actions";
import {addSession, fetchSessions} from "../../redux/sessions/actions";
import {Session} from "../../redux/types";

export default function PostSession() {
    const [feelings, setFeelings] = useState("");
    const [score, setScore] = useState(50);
    const dispatch = useDispatch();
    const temp = useSelector((state: StoreInterface) => state.session_state.temp_session);



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
        <form onSubmit={submit_func}>
            <label>
                Type in your current feelings here
                <textarea value={feelings} onChange={(e) => setFeelings(e.target.value)}/>
            </label>
            <label>
                Please score your feelings from 1 to 100
                <input type="range" min="1" max="100" value={score}
                       onChange={(e) => setScore(parseInt(e.target.value))} />
            </label>

            <input type="submit" value={"Finish"} />
        </form>
    )
}