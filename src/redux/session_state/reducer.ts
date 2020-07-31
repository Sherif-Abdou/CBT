import { SessionStateActions, TOGGLE_SESSION_STAGE, UPDATE_TEMP_SESSION } from "./types";
import { Session } from "../types";

type SessionMode = "None" | "Pre" | "Fix" | "Post";

function next(mode: SessionMode): SessionMode {
    switch (mode) {
        case "None":
            return "Pre";
        case "Pre":
            return "Fix";
        case "Fix":
            return "Post";
        case "Post":
            return "None";
    }
}

interface SessionState {
    session_mode: SessionMode 
    temp_session: Session | object
}

const initialState: SessionState = {
    session_mode: "None",
    temp_session: null
}

export default function sessionStateReducer(state=initialState, action: SessionStateActions): SessionState {
    switch (action.type) {
        case TOGGLE_SESSION_STAGE:
            return {
                ...state,
                session_mode: next(state.session_mode)
            }
        case UPDATE_TEMP_SESSION: {
            const curr_temp = state.temp_session;
            if (action.session_parts === null) {
                return {
                    ...state,
                    temp_session: null
                }
            }

            if (curr_temp !== null) {
                return {
                    ...state,
                    temp_session: {...action.session_parts}
                }
            } else {
                return {
                    ...state,
                    temp_session: {...state.temp_session, ...action.session_parts}
                }
            }
        }
        default:
            return state
    }
}
