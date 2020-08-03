import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {useDispatch} from "react-redux";
import {toggleSessionStage, updateTempSession} from "../../redux/session_state/actions";

export default function PreSession() {
    const [feelings, setFeelings] = useState("");
    const [score, setScore] = useState(50);
    const dispatch = useDispatch();

    const submit_func =
        () => {
            dispatch(updateTempSession({
                pre_feelings: feelings,
                pre_score: score,
                date: new Date(),
                id: uuidv4(),
            }));
            dispatch(toggleSessionStage());
        }

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

            <input type="submit" value={"Next"} />
        </form>
    )
}