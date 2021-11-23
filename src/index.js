import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/bootstrap4.css";
import "./assets/css/yugi.css";
import "./assets/css/signwall.css";
import PianoApp from "./PianoApp";

ReactDOM.render(
  <React.StrictMode>
    <PianoApp></PianoApp>
  </React.StrictMode>,
  document.getElementById("root")
);
