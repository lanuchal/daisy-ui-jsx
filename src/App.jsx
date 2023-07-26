import React, { useEffect, useState } from "react";
import { DashboradRoute } from "./routes/DashboradRoute";
import { AuthRoute } from "./routes/AuthRoute";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";

function App() {
  const loginStore = useSelector((state) => state.loginStore.status);
  const theme = useSelector((state) => state.themeStore.value);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      {loginStore ? (
        <RouterProvider router={DashboradRoute} />
      ) : (
        <RouterProvider router={AuthRoute} />
      )}
    </>
  );
}

export default App;
