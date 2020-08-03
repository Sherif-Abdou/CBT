export const TOGGLE_SESSION_STAGE = "TOGGLE_SESSION_STAGE";
export const UPDATE_TEMP_SESSION = "UPDATE_TEMP_SESSION";

interface ToggleSessionStageAction {
    type: typeof TOGGLE_SESSION_STAGE
}

interface UpdateTempSessionAction {
    type: typeof UPDATE_TEMP_SESSION
    session_parts: object
}

export type SessionStateActions = ToggleSessionStageAction | UpdateTempSessionAction;
