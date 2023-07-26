import React from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { handleLogin } from "../../stores/LoginSlice";

function LoginView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickLogin = () => {
    dispatch(handleLogin());
    navigate("/home");
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold w-96">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. 
        </p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={clickLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
