import { ADD_SESSION, REMOVE_SESSION, SessionActionTypes, ADD_SESSIONS } from "./types"
import { Session } from "../types";

export function addSession(session: Session): SessionActionTypes {
    return {
        type: ADD_SESSION,
        session
    }
}

export function addSessions(sessions: Session[]): SessionActionTypes {
    return {
        type: ADD_SESSIONS,
        sessions
    }
}

export function removeSession(session_id: string): SessionActionTypes {
    return {
        type: REMOVE_SESSION,
        session_id
    }
}

export function fetchSessions(url: string, fetch_func = fetch) {
    interface Data {
        id: string
        pre_score: number
        pre_feelings: string
        post_feelings: string
        post_score: number
        date: string
    }

    return (dispatch: any) => {
        return fetch_func(url)
            .then(response => response.json())
            .then((json: Data[]) => {
                const session_set = json.map(data => ({
                    ...data,
                    date: new Date(data.date)
                }));

                dispatch(addSessions(session_set));
            });
    }
}
