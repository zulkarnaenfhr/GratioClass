import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import GratioClass from "./Gratio-Class/Gratio-Class";
import { BrowserRouter } from "react-router-dom";
import Maintenance from "./Gratio-Class/GratioClass-Maintenance/Maintenance";

ReactDOM.render(
    <BrowserRouter>
        <GratioClass />
    </BrowserRouter>,
    document.getElementById("root")
);
// ReactDOM.render(
//     <BrowserRouter>
//         <Maintenance />
//     </BrowserRouter>,
//     document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
