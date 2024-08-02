import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Post from "./assets/pages/posts/Post";
import ShirtsOrdered from "./assets/pages/shirtsOrdered/ShirtsOrdered";
import ShirtsToSell from "./assets/pages/shirtsToSell/ShirtsToSell";
import Settings from "./assets/pages/settings/Settings";
import About from "./assets/pages/about/About";
import Add from "./assets/pages/add/Add";
import PrivateChat from "./assets/pages/privateChat/PrivateChat";
import Profile from "./assets/pages/profile/Profile";
import ErrorPage from "./assets/pages/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Post />,
            },
            {
                path: "shirtsordered",
                element: <ShirtsOrdered />,
            },
            {
                path: "shirtstosell",
                element: <ShirtsToSell />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "add",
                element: <Add />,
            },
            {
                path: "privatechat",
                element: <PrivateChat />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
        errorElement: <ErrorPage/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
);
