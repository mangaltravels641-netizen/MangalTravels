import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/hero_img.jpg'

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login Data:", formData);

        // After successful login
        navigate("/");
    };

    return (
        <>
            <Navbar />
                {/* Background Overlay */}
                <div className="login-overlay"></div>

                <section
                    className="position-relative"
                    style={{
                        minHeight: "590px",
                        backgroundImage:
                            "linear-gradient(rgba(0, 43, 92, 0.62), rgba(0, 43, 92, 0.55)), url(" + logo +")",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="container-fluid min-vh-100">

                        <div className="row min-vh-100 align-items-center">

                            {/* Left Side - Welcome Text */}
                            <div className="col-lg-7 d-none d-lg-flex">

                                <div className="text-white px-5">

                                    <h1 className="display-4 fw-bold">
                                        Travel With Comfort
                                    </h1>

                                    <p className="fs-4 mt-3">
                                        Book your bus journey quickly,
                                        easily and securely.
                                    </p>

                                    <div className="d-flex gap-4 mt-4">

                                        <div>
                                            <i className="bi bi-bus-front fs-2"></i>

                                            <p className="mt-2 mb-0">
                                                Comfortable Buses
                                            </p>
                                        </div>

                                        <div>
                                            <i className="bi bi-shield-check fs-2"></i>

                                            <p className="mt-2 mb-0">
                                                Secure Booking
                                            </p>
                                        </div>

                                        <div>
                                            <i className="bi bi-clock fs-2"></i>

                                            <p className="mt-2 mb-0">
                                                Easy & Fast
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* Login Card */}
                            <div className="col-lg-5 col-md-8 col-sm-10 mx-auto">

                                <div className="login-card bg-white shadow-lg rounded-4 p-4 p-md-5">

                                    {/* Logo */}
                                    <div className="text-center mb-4">

                                        <div className="login-logo mx-auto mb-3">
                                            <i className="bi bi-bus-front-fill" style={{fontSize: 52}}></i>
                                        </div>

                                        <h2 className="fw-bold">
                                            Welcome Back
                                        </h2>

                                        <p className="text-muted">
                                            Login to continue your journey
                                        </p>

                                    </div>


                                    {/* Login Form */}
                                    <form onSubmit={handleSubmit}>

                                        {/* Email */}
                                        <div className="mb-3">

                                            <label className="form-label fw-semibold">
                                                Email Address
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-envelope"></i>
                                                </span>

                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter your email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />

                                            </div>

                                        </div>


                                        {/* Password */}
                                        <div className="mb-3">

                                            <div className="d-flex justify-content-between">

                                                <label className="form-label fw-semibold">
                                                    Password
                                                </label>

                                                <Link
                                                    to="/forgot-password"
                                                    className="text-decoration-none small"
                                                >
                                                    Forgot Password?
                                                </Link>

                                            </div>

                                            <div className="input-group">

                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-lock"></i>
                                                </span>

                                                <input
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="Enter your password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                />

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={() =>
                                                        setShowPassword(!showPassword)
                                                    }
                                                >
                                                    <i
                                                        className={
                                                            showPassword
                                                                ? "bi bi-eye-slash"
                                                                : "bi bi-eye"
                                                        }
                                                    ></i>
                                                </button>

                                            </div>

                                        </div>


                                        {/* Remember Me */}
                                        <div className="form-check mb-4">

                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="rememberMe"
                                            />

                                            <label
                                                className="form-check-label"
                                                htmlFor="rememberMe"
                                            >
                                                Remember me
                                            </label>

                                        </div>


                                        {/* Login Button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100 py-2 fw-semibold"
                                        >
                                            <i className="bi bi-box-arrow-in-right me-2"></i>
                                            Login
                                        </button>

                                    </form>


                                    {/* Register */}
                                    <div className="text-center mt-4">

                                        <span className="text-muted">
                                            Don't have an account?
                                        </span>

                                        <Link
                                            to="/register"
                                            className="text-decoration-none fw-semibold ms-2"
                                        >
                                            Create Account
                                        </Link>

                                    </div>


                                    {/* Divider */}
                                    <div className="d-flex align-items-center my-4">

                                        <hr className="flex-grow-1" />

                                        <span className="px-3 text-muted small">
                                            OR
                                        </span>

                                        <hr className="flex-grow-1" />

                                    </div>


                                    {/* Guest Login */}
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary w-100"
                                        onClick={() => navigate("/")}
                                    >
                                        Continue as Guest
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>
            <Footer />
        </>
    )
}

export default Login;