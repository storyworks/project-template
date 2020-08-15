import React from "react";
import { render } from "react-dom";

import BusySpinner from "./components/BusySpinner";

import "./assets/index.scss";

const Application = () => (
  <>
    <h1>Application</h1>
    <BusySpinner>This is a spinner</BusySpinner>
  </>
);

render(<Application />, document.getElementById("root"));
