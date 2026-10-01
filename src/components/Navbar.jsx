import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container">
                <Link
                    to="/"
                    className="navbar-brand fw-bold d-flex align-items-center gap-2"
                    //  style={{color: "navy"}}
                >
                    {/* <span className="fs-4">🚌</span> */}
                    <i class="bi bi-bus-front-fill"></i>
                    Mangal Travels
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/bookings">
                                My Bookings
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">
                                Profile
                            </Link>
                        </li>

                        <li className="nav-item ms-lg-2">
                            <Link
                                to="/login"
                                className="btn btn-outline-light btn-sm px-3"
                            >
                                <i class="bi bi-box-arrow-in-right me-2"></i>
                                Login
                            </Link>
                        </li>

                        <li className="nav-item mt-sm-2 mt-md-2 mt-lg-0">
                            <Link to="/register" className="btn btn-light text-primary btn-sm px-3">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



