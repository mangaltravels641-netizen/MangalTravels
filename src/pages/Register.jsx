import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import logo from '../assets/hero_img.jpg'

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setError("");
    };


    const handleSubmit = (e) => {

        e.preventDefault();

        // Password validation
        if (formData.password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        // Confirm password validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        console.log("Registration Data:", formData);

        // After successful registration
        navigate("/login");
    };

    return (
        <>
            <Navbar />
            <section
                className="position-relative"
                style={{
                    minHeight: "590px",
                    backgroundImage:
                        "linear-gradient(rgba(0, 43, 92, 0.62), rgba(0, 43, 92, 0.55)), url(" + logo + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container-fluid min-vh-100">
                    <div className="row min-vh-100 align-items-center">
                        <div className="col-lg-6 d-none d-lg-flex">
                            <div className="text-white px-5">

                                <h1 className="display-4 fw-bold">
                                    Start Your Journey
                                </h1>

                                <p className="fs-4 mt-3">
                                    Create your account and make
                                    your bus travel easier.
                                </p>

                                <div className="mt-4">

                                    <div className="d-flex align-items-center mb-3">
                                        <i className="bi bi-search fs-3 me-3"></i>

                                        <span className="fs-5">
                                            Find the best buses
                                        </span>
                                    </div>

                                    <div className="d-flex align-items-center mb-3">
                                        <i className="bi bi-ticket-perforated fs-3 me-3"></i>

                                        <span className="fs-5">
                                            Book your tickets easily
                                        </span>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-shield-check fs-3 me-3"></i>

                                        <span className="fs-5">
                                            Safe and secure booking
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Register Card */}
                        <div className="col-lg-6 col-md-9 col-sm-11 mx-auto my-3">
                            <div className="register-card bg-white shadow-lg rounded-4 p-4 p-md-5">
                                {/* Header */}
                                <div className="text-center mb-4">

                                    <div className="register-logo mx-auto mb-3">
                                        <i className="bi bi-person-plus-fill"></i>
                                    </div>

                                    <h2 className="fw-bold">
                                        Create Account
                                    </h2>

                                    <p className="text-muted mb-0">
                                        Register to start booking bus tickets
                                    </p>

                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="alert alert-danger py-2">
                                        <i className="bi bi-exclamation-circle me-2"></i>
                                        {error}
                                    </div>
                                )}

                                {/* Registration Form */}
                                <form onSubmit={handleSubmit}>

                                    <div className="row g-3">

                                        {/* First Name */}
                                        <div className="col-md-6">

                                            <label className="form-label fw-semibold">
                                                First Name
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-person"></i>
                                                </span>

                                                <input type="text" name="firstName" className="form-control" placeholder="First name"
                                                    value={formData.firstName} onChange={handleChange} required />

                                            </div>

                                        </div>


                                        {/* Last Name */}
                                        <div className="col-md-6">

                                            <label className="form-label fw-semibold">
                                                Last Name
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-person"></i>
                                                </span>

                                                <input type="text" name="lastName" className="form-control" placeholder="Last name"
                                                    value={formData.lastName} onChange={handleChange} required />

                                            </div>

                                        </div>


                                        {/* Email */}
                                        <div className="col-12">

                                            <label className="form-label fw-semibold">
                                                Email Address
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-envelope"></i>
                                                </span>

                                                <input type="email" name="email" className="form-control" placeholder="Enter your email"
                                                    value={formData.email} onChange={handleChange} required />

                                            </div>

                                        </div>


                                        {/* Phone */}
                                        <div className="col-12">

                                            <label className="form-label fw-semibold">
                                                Phone Number
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-telephone"></i>
                                                </span>

                                                <input type="tel" name="phone" className="form-control"
                                                    placeholder="Enter your phone number" value={formData.phone} onChange={handleChange}
                                                    pattern="[0-9]{10}" maxLength="10" required />

                                            </div>

                                            <small className="text-muted">
                                                Enter a 10-digit mobile number
                                            </small>

                                        </div>


                                        {/* Password */}
                                        <div className="col-md-6">

                                            <label className="form-label fw-semibold">
                                                Password
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-lock"></i>
                                                </span>

                                                <input type={showPassword ? "text" : "password"} name="password"
                                                    className="form-control" placeholder="Password" value={formData.password}
                                                    onChange={handleChange} required />

                                                <button type="button" className="btn btn-outline-secondary" onClick={() =>
                                                    setShowPassword(!showPassword)
                                                }
                                                >
                                                    <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                                                </button>

                                            </div>

                                        </div>


                                        {/* Confirm Password */}
                                        <div className="col-md-6">

                                            <label className="form-label fw-semibold">
                                                Confirm Password
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-lock-fill"></i>
                                                </span>

                                                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword"
                                                    className="form-control" placeholder="Confirm password"
                                                    value={formData.confirmPassword} onChange={handleChange} required />

                                                <button type="button" className="btn btn-outline-secondary" onClick={() =>
                                                    setShowConfirmPassword(
                                                        !showConfirmPassword
                                                    )
                                                }
                                                >
                                                    <i className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                                                </button>

                                            </div>

                                        </div>

                                    </div>


                                    {/* Terms */}
                                    <div className="form-check mt-4 mb-3">

                                        <input type="checkbox" className="form-check-input" id="terms" required />

                                        <label className="form-check-label small" htmlFor="terms">
                                            I agree to the Terms & Conditions
                                            and Privacy Policy.
                                        </label>

                                    </div>


                                    {/* Register Button */}
                                    <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
                                        <i className="bi bi-person-plus me-2"></i>
                                        Create Account
                                    </button>

                                </form>

                                {/* Login Link */}
                                <div className="text-center mt-4">

                                    <span className="text-muted">
                                        Already have an account?
                                    </span>

                                    <Link to="/login" className="text-decoration-none fw-semibold ms-2">
                                        Login
                                    </Link>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Register