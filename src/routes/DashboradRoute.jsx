import React from "react";
import Page404 from "../common/Page404";
import CardController from "../containers/controllers/CardController";
import HomeConcroller from "../containers/controllers/HomeConcroller";
import LoginController from "../containers/controllers/LoginController";
import RegisterController from "../containers/controllers/RegisterController";

import {
  createBrowserRouter,
} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { BASE_PATH } from "../Constants";

const routes = [
  {
    path: "/*",

    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomeConcroller />,
      },
      {
        path: "card",
        element: <CardController />,
      },
      {
        path: "login",
        element: <LoginController />,
      },
      {
        path: "register",
        element: <RegisterController />,
      },
      {
        path: "*",
        element: <HomeConcroller />,
      },
    ],
  },
];

export const DashboradRoute = createBrowserRouter(
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
