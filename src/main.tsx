import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import Styles from "./styles";
import Theme from "./themes/default";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <div>Hello React</div>
      <Styles />
    </ThemeProvider>
  </React.StrictMode>
);
