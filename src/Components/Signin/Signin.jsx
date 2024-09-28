import React, { useState } from "react";
import "./Signin.css";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Signin = () => {
  const [isActive, setIsActive] = useState("");

  const showRegister = () => {
    setIsActive("active");
  };

  const showSignin = () => {
    setIsActive("");
  };

  return (
    <div className={`signin-container ${isActive}`}>
      {/* Sign In Form */}
      <div className="signin-box">
        <form action="">
          <h1>Sign In</h1>
          <div className="input-box">
            <input type="text" placeholder="Enter Username" required />
            <FaUser className="icon user-icon" />
            <input type="password" placeholder="Enter Password" required />
            <RiLockPasswordFill className="icon password-icon" />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forget Password?</a>
          </div>

          <button type="submit">Sign In</button>

          <div className="toggle-link">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={showRegister}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Registration Form */}
      <div className="register-box">
        <form action="">
          <h1>Register</h1>
          <div className="reginput-box">
            <input type="text" placeholder="Enter Username" required />
            <FaUser className="reguser-icon" />
            <input type="text" placeholder="Enter Email" required />
            <FaEnvelope className="regemail-icon" />
            <input type="password" placeholder="Enter Password" required />
            <RiLockPasswordFill className="regpassword-icon" />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Agree to Terms & Conditions
            </label>
          </div>

          <button type="submit">Register</button>

          <div className="toggle-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={showSignin}>
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
