import React from "react";
import {Session} from "../redux/types";

interface Props {
    session: Session
}

function formatTime(time: number): string {
    if (time < 10) {
        return "0" + time.toString();
    }
    return time.toString();
}

export default function SessionItem(props: Props) {
    const {session} = props;
    return (
        <li>{session.date.getMonth()}/{session.date.getDay()}/{session.date.getFullYear()} {formatTime(session.date.getHours())}:{formatTime(session.date.getMinutes())}</li>
    )
}