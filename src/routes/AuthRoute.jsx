import React from "react";
import Page404 from "../common/Page404";
import { Routes, Route } from "react-router-dom";
import LoginController from "../containers/controllers/LoginController";

function AuthRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginController />} />
        <Route path="/*" element={<LoginController />} />
      </Routes>
    </div>
  );
}

export default AuthRoute;
