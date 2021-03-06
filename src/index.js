import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "utils/styles/theme/theme";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename="/hh.worklist">
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
