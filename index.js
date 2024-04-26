import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Graphview0 from "./componenets/graph0";
import Graphview1 from "./componenets/graph1";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path: "graph/", element: <App /> },
    { path: "graph/base", element: <Graphview0 /> },
    { path: "graph/base1", element: <Graphview1 /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
