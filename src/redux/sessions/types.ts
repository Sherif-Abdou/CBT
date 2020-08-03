import { Session } from "../types";

export const ADD_SESSION = "ADD_SESSION";
export const ADD_SESSIONS = "ADD_SESSIONS";
export const REMOVE_SESSION = "REMOVE_SESSION";

interface AddSessionAction {
    type: typeof ADD_SESSION
    session: Session
}

interface AddSessionsAction {
    type: typeof ADD_SESSIONS
    sessions: Session[]
}

interface RemoveSessionAction {
    type: typeof REMOVE_SESSION
    session_id: string
}

export type SessionActionTypes = AddSessionAction | AddSessionsAction | RemoveSessionAction;
