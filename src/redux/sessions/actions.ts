import { ADD_SESSION, REMOVE_SESSION, SessionActionTypes } from "./types"
import { Session } from "../types";

export function addSession(session: Session): SessionActionTypes {
    return {
        type: ADD_SESSION,
        session
    }
}

export function removeSession(session_id: string): SessionActionTypes {
    return {
        type: REMOVE_SESSION,
        session_id
    }
}
