import {createStore, combineReducers, applyMiddleware} from "redux";
import sessionsReducer from "./sessions/reducer";
import thunkMiddleware from "redux-thunk";
import sessionStateReducer, {SessionState} from "./session_state/reducer";
import {Session} from "./types";

export interface StoreInterface {
    sessions: Session[],
    session_state: SessionState
}

let store = createStore(
    combineReducers({
        sessions: sessionsReducer,
        session_state: sessionStateReducer
    }),
    applyMiddleware(
        thunkMiddleware
    )
);


export default store;
