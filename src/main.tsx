import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./styles/globals.css";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { lightTheme } from "./theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
