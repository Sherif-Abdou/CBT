import React from "react";
import PreviousSessions from "./PreviousSessions";
import send_store from "../redux/send_store";

function MainWindow() {

    return (
        <div>
            <h1>Peoples</h1>


            <PreviousSessions />
        </div>
    );
}

export default MainWindow;
