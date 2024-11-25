import React, { useState } from "react";
import { assets } from "../../assets/assets";
import './LoginPopup.css'
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
      <div className="login-popup-container bg-white p-4 rounded shadow-lg">
        <div className="login-popup-title d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">{currState}</h2>
          <img
            src={assets.cross_icon}
            alt="Close"
            onClick={() => setShowLogin(false)}
            style={{ width: "24px", height: "24px", cursor: "pointer" }}
          />
        </div>
        <form>
          <div className="login-popup-inputs mb-3">
            {currState === "Sign Up" && (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
            )}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-condition d-flex align-items-center mb-3">
            <input
              type="checkbox"
              className="form-check-input me-2"
              required
            />
            <p className="mb-0">
              By continuing, I agree to the <a href="#">terms of use</a> &amp;{" "}
              <a href="#">privacy policy</a>.
            </p>
          </div>
          {currState === "Login" ? (
            <p className="text-center">
              Create a new account?{" "}
              <span
                className="text-primary text-decoration-underline"
                style={{ cursor: "pointer" }}
                onClick={() => setCurrState("Sign Up")}
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="text-center">
              Already have an account?{" "}
              <span
                className="text-primary text-decoration-underline"
                style={{ cursor: "pointer" }}
                onClick={() => setCurrState("Login")}
              >
                Login here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
