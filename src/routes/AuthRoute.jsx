import React from "react";
import LoginController from "../containers/controllers/LoginController";
import AuthLayout from "../layout/AuthLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: "/*",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginController />,
      },
      {
        path: "*",
        element: <LoginController />,
      },
    ],
  },
];
export const AuthRoute = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
  },
});
