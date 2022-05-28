import React from "react";

import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import ReactDOM from "react-dom";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
