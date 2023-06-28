import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomeBase from "./home/HomeBase.jsx";
import LoginCallback from "./login/LoginCallback.jsx";

import ReduxStore from "./redux/ReduxStore.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login/callback",
        element: <LoginCallback />,
      },
      {
        path: "home",
        element: <HomeBase />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={ReduxStore}>
    <RouterProvider router={router} />
  </Provider>
);
