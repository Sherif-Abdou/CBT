import {SessionStateActions, TOGGLE_SESSION_STAGE, UPDATE_TEMP_SESSION} from "./types";

export function toggleSessionStage(): SessionStateActions {
    return {
        type: TOGGLE_SESSION_STAGE
    }
}

export function updateTempSession(session_parts: object): SessionStateActions {
    return {
        type: UPDATE_TEMP_SESSION,
        session_parts
    }
}
