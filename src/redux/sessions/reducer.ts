import { Session } from "../types";
import { SessionActionTypes, ADD_SESSION, REMOVE_SESSION } from "./types";

const initialState: Session[] = [];

export default function sessionReducer(state = initialState, action: SessionActionTypes): typeof initialState {
    switch (action.type) {
        case ADD_SESSION:
            return [...state, action.session];
        case REMOVE_SESSION:
            return state.filter(v => v.id === action.session_id);
        default:
            return state;
    }
}
