import store from "../../src/redux/index";
import { toggleSessionStage, updateTempSession } from "../../src/redux/session_state/actions"


test("Test store init", () => {
    const state = store.getState();

    expect(state.session_state).toEqual({
        session_mode: "None",
        temp_session: null
    });
});


test("Test toggle", () => {
    let { session_state } = store.getState();

    store.dispatch(toggleSessionStage());

    session_state = store.getState().session_state;

    expect(session_state.session_mode).toEqual("Pre");



    store.dispatch(toggleSessionStage());

    session_state = store.getState().session_state;

    expect(session_state.session_mode).toEqual("Fix");



    store.dispatch(toggleSessionStage());

    session_state = store.getState().session_state;

    expect(session_state.session_mode).toEqual("Post");


    store.dispatch(toggleSessionStage());

    session_state = store.getState().session_state;

    expect(session_state.session_mode).toEqual("None");

});

test("Test update session", () => {
    let temp = {
        pre_score: 10,
        pre_feelings: "bad"
    }

    store.dispatch(updateTempSession(temp));

    let { session_state } = store.getState();

    expect(session_state.temp_session).toEqual(temp);

    let id = "1";

    store.dispatch(updateTempSession({ id }));

    session_state = store.getState().session_state;

    expect(session_state.temp_session).toEqual({
        ...temp,
        id
    });
});
