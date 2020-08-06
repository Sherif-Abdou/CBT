import {Session} from "./types";

export default function send_store(url: string, sessions: Session[], fetch_func=fetch): Promise<Response> {
    return fetch_func(url, {
        body: JSON.stringify(sessions),
        method: "post"
    })
}