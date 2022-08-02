import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import Theme from "./themes/default";
import Styles from "./styles";
import Router from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Styles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
