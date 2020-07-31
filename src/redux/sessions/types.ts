import { Session } from "../types";

export const ADD_SESSION = "ADD_SESSION";
export const REMOVE_SESSION = "REMOVE_SESSION";

interface AddSessionAction {
    type: typeof ADD_SESSION
    session: Session
}

interface RemoveSessionAction {
    type: typeof REMOVE_SESSION
    session_id: string
}

export type SessionActionTypes = AddSessionAction | RemoveSessionAction;
