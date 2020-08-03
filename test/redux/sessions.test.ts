import store from "../../src/redux/index";
import { addSession, removeSession, addSessions, fetchSessions } from "../../src/redux/sessions/actions";

beforeEach(() => {
    const sessions = store.getState().sessions;

    sessions.forEach(data => {
        store.dispatch(removeSession(data.id));
    });
});

test("Able to add a new session", () => {
    const obj = {
        date: new Date(),
        pre_score: 0,
        pre_feelings: "",
        post_score: 0,
        post_feelings: "",
        id: "0"
    }
    store.dispatch(addSession(obj));

    const state = store.getState();
    expect(state.sessions).toEqual([obj]);
});

test("Able add multiple sessions", () => {
    let objs = ["0", "1", "2"].map(id => ({
        date: new Date(),
        pre_score: 0,
        pre_feelings: "",
        post_score: 0,
        post_feelings: "",
        id
    }));

    store.dispatch(addSessions(objs));

    const state = store.getState();
    expect(state.sessions).toEqual(objs);
});

test("Able to remove a session", () => {
    const id = "0";
    store.dispatch(removeSession(id));

    const state = store.getState();
    expect(state.sessions).toEqual([]);
});

