import React from "react";
import AuthLayout from "../layout/AuthLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { BASE_PATH } from "../utils/Constants";
import LoginController from "../containers/auth/LoginController";

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
export const AuthRoute = createBrowserRouter(
  routes,
  {
    basename: BASE_PATH,
  },
  {
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);
