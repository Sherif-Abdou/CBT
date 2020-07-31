import {createStore, combineReducers} from "redux";
import sessionsReducer from "./sessions/reducer";
import sessionStateReducer from "./session_state/reducer";


let store = createStore(combineReducers({
    sesssions: sessionsReducer,
    session_state: sessionStateReducer
}));
