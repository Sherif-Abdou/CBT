import React from "react";
import {Session} from "../redux/types";

interface Props {
    session: Session
}

export default function SessionItem(props: Props) {
    return (
        <li>{props.session.date.getMonth()}/{props.session.date.getDay()}/{props.session.date.getFullYear()}</li>
    )
}