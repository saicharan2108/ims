import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import { RiEyeOffFill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";

import "./index.css";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    adminCode: "", // New field for admin access code
  });
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    setLoading(true);

    // Determine isAdmin based on adminCode
    let isAdmin = false;
    if (formData.adminCode === "BEC2024ADMIN") {
      isAdmin = true;
    }

    // Construct payload based on isAdmin
    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: isAdmin ? "admin" : "user",
    };

    if (!isAdmin) {
      // If admin code is not provided, set role to "user"
      payload.role = "user";
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch("https://ims-server-63af.onrender.com/api/register", options);
    if (response.ok) {
      setLoading(false);
      const json = await response.json();
      localStorage.setItem("user", JSON.stringify(json));
      toast.success("Account created successfully");
      if (json.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user-home");
      }
    } else {
      setLoading(false);
      const json = await response.json();
      toast.error(json.message);
      console.log(json);
    }
  };

  return (
    <div>
      <img
        src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
        alt="BEC"
        className="signup-college-logo"
      />
      <motion.div
        className="login-container"
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
      >
        <div className="login-image-container login-image-container-2">
          <img
            src="https://res.cloudinary.com/dlovqnrza/image/upload/v1689935450/best-project-management-platforms-featured-image-scaled-1_qd5slm.jpg"
            alt="login"
          />
        </div>

        <div className="login-form-container">
          <div className="login-header login-header-2">
            <h1>Inventory Management System</h1>
            <div className="header-gradient-container header-gradient-container-2"></div>
          </div>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Up</h1>
            <div className="input-container">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <label htmlFor="input" className="label">
                Name
              </label>
              <div className="underline"></div>
              {errors.username && (
                <p className="error">*Name is required</p>
              )}
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email" 
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="input" className="label">
                Email
              </label>
              <div className="underline"></div>
              {errors.email && <p className="error">*Email is required</p>}
            </div>
            <div className="input-container">
              {!showPassword ? (
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              )}
              <label htmlFor="input" className="label">
                Password
              </label>
              {!showPassword ? (
                <RiEyeOffFill
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-icon"
                />
              ) : (
                <RiEyeFill
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-icon"
                />
              )}
              <div className="underline"></div>
              {errors.password && (
                <p className="error">
                  *Password must be at least 5 characters
                </p>
              )}
            </div>
            <div className="input-container">
              <input
                type="text"
                name="adminCode"
                value={formData.adminCode}
                onChange={handleChange}
              />
              <label htmlFor="input" className="label">
                Admin Access Code (Optional)
              </label>
              <div className="underline"></div>
            </div>
            <button className="login-button sigin-btn">
              {loading ? (
                <Oval
                  height={25}
                  width={25}
                  color="#5330f0"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#fff"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                "Create Account"
              )}
            </button>
            <p>
              Already have an account?{" "}
              <Link to="/" className="sign-up-txt">
                Login
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
