import React from "react";
import Page404 from "../containers/_common/Page404";

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { BASE_PATH } from "../utils/Constants";
import HomeConcroller from "../containers/home/HomeConcroller";
import CardController from "../containers/card/CardController";
import LoginController from "../containers/auth/LoginController";
import RegisterController from "../containers/auth/RegisterController";

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
        path: "page",
        children: [
          {
            path: "login",
            element: <LoginController />,
          },
          {
            path: "register",
            element: <RegisterController />,
          },
        ],
      },
      {
        path: "*",
        element: <Page404 />,
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
