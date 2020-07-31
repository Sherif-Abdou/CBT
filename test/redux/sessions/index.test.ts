import store from "../../../src/redux/index";
import { addSession, removeSession } from "../../../src/redux/sessions/actions";


test("Initial store state works", () => {
    const state = store.getState();
    expect(state.sesssions).toEqual([]);
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
    expect(state.sesssions).toEqual([obj]);
});

test("Able to remove a session", () => {
    const id = "0";
    store.dispatch(removeSession(id));

    const state = store.getState();
    expect(state.sesssions).toEqual([]);
});

