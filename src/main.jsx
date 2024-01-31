import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-bootstrap/dist/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { StateContextProvider } from "./context/AuthContextProvider";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <StateContextProvider>
            <RouterProvider router={router} />
        </StateContextProvider>
    </React.StrictMode>
);
