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
        <form onSubmit={submit_func} className="form-item">
            <label>
                Type in your current feelings here
                <br />
                <br />
                <textarea className="text" value={feelings} onChange={(e) => setFeelings(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
                Please score your feelings from 1 to 100
                <br />
                <br/>
                <input type="range" min="1" max="100" value={score}
                       className="slider"
                       onChange={(e) => setScore(parseInt(e.target.value))} />

            </label>
            <p>{score}</p>

            <br/>
            <input className="btn btn-submit" type="submit" value={"Next"} />
        </form>
    )
}