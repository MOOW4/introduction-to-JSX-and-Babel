import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);


ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));