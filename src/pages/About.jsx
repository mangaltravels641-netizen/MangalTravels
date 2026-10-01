import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./About.css"
import { Link } from 'react-router-dom'
import logo from "../assets/hero_img.jpg"

export default function About() {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <section className="about-hero">

                <div className="about-overlay"></div>

                <div className="container position-relative">

                    <div className="row min-vh-50 align-items-center">

                        <div className="col-lg-8 text-white">

                            <span className="badge bg-primary px-3 py-2 mb-3">
                                About Us
                            </span>

                            <h1 className="display-4 fw-bold">
                                Making Bus Travel
                                <br />
                                Simple & Comfortable
                            </h1>

                            <p className="lead mt-3">
                                Your trusted platform for finding,
                                comparing and booking bus tickets
                                quickly and securely.
                            </p>

                            <Link
                                to="/"
                                className="btn btn-primary px-4 py-2 mt-3"
                            >
                                Book Your Journey
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* About Us Section */}
            <section className="py-5">

                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <div className="about-image-wrapper">

                                <img
                                    src={logo}
                                    alt="Bus Travel"
                                    className="img-fluid rounded-4 shadow"
                                />

                            </div>

                        </div>


                        <div className="col-lg-6">

                            <span className="text-primary fw-semibold">
                                WHO WE ARE
                            </span>

                            <h2 className="fw-bold mt-2 mb-3">
                                Your Journey Starts With Us
                            </h2>

                            <p className="text-muted">
                                Our bus reservation platform makes it
                                easy for travelers to search and book
                                bus tickets from anywhere.
                            </p>

                            <p className="text-muted">
                                We bring together different bus
                                operators and routes into one simple
                                platform, allowing passengers to find
                                suitable buses, select seats and
                                complete their bookings conveniently.
                            </p>

                            <div className="row mt-4">

                                <div className="col-6 mb-3">

                                    <h3 className="fw-bold text-primary">
                                        100+
                                    </h3>

                                    <p className="text-muted mb-0">
                                        Bus Routes
                                    </p>

                                </div>

                                <div className="col-6 mb-3">

                                    <h3 className="fw-bold text-primary">
                                        50+
                                    </h3>

                                    <p className="text-muted mb-0">
                                        Bus Operators
                                    </p>

                                </div>

                                <div className="col-6">

                                    <h3 className="fw-bold text-primary">
                                        10K+
                                    </h3>

                                    <p className="text-muted mb-0">
                                        Happy Travelers
                                    </p>

                                </div>

                                <div className="col-6">

                                    <h3 className="fw-bold text-primary">
                                        24/7
                                    </h3>

                                    <p className="text-muted mb-0">
                                        Online Booking
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Why Choose Us */}
            <section className="py-5 bg-light">

                <div className="container">

                    <div className="text-center mb-5">

                        <span className="text-primary fw-semibold">
                            WHY CHOOSE US
                        </span>

                        <h2 className="fw-bold mt-2">
                            Everything You Need For Your Journey
                        </h2>

                        <p className="text-muted">
                            We make bus booking simple, convenient
                            and reliable.
                        </p>

                    </div>


                    <div className="row g-4">

                        {/* Feature 1 */}
                        <div className="col-md-6 col-lg-3">

                            <div className="card border-0 shadow-sm h-100 text-center p-4">

                                <div className="feature-icon mx-auto mb-3">
                                    <i className="bi bi-search"></i>
                                </div>

                                <h5 className="fw-bold">
                                    Easy Search
                                </h5>

                                <p className="text-muted mb-0">
                                    Quickly find buses based on
                                    your route, date and preferences.
                                </p>

                            </div>

                        </div>


                        {/* Feature 2 */}
                        <div className="col-md-6 col-lg-3">

                            <div className="card border-0 shadow-sm h-100 text-center p-4">

                                <div className="feature-icon mx-auto mb-3">
                                    <i className="bi bi-bus-front"></i>
                                </div>

                                <h5 className="fw-bold">
                                    Multiple Buses
                                </h5>

                                <p className="text-muted mb-0">
                                    Compare different buses,
                                    timings and available seats.
                                </p>

                            </div>

                        </div>


                        {/* Feature 3 */}
                        <div className="col-md-6 col-lg-3">

                            <div className="card border-0 shadow-sm h-100 text-center p-4">

                                <div className="feature-icon mx-auto mb-3">
                                    <i className="bi bi-credit-card"></i>
                                </div>

                                <h5 className="fw-bold">
                                    Secure Payment
                                </h5>

                                <p className="text-muted mb-0">
                                    Complete your ticket booking
                                    through a secure payment process.
                                </p>

                            </div>

                        </div>


                        {/* Feature 4 */}
                        <div className="col-md-6 col-lg-3">

                            <div className="card border-0 shadow-sm h-100 text-center p-4">

                                <div className="feature-icon mx-auto mb-3">
                                    <i className="bi bi-headset"></i>
                                </div>

                                <h5 className="fw-bold">
                                    Customer Support
                                </h5>

                                <p className="text-muted mb-0">
                                    Get assistance whenever you
                                    need help with your booking.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* How It Works */}
            <section className="py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <span className="text-primary fw-semibold">
                            HOW IT WORKS
                        </span>

                        <h2 className="fw-bold mt-2">
                            Book Your Bus In 4 Simple Steps
                        </h2>

                    </div>


                    <div className="row g-4 text-center">

                        {/* Step 1 */}
                        <div className="col-md-3">

                            <div className="step-number mx-auto">
                                1
                            </div>

                            <h5 className="fw-bold mt-3">
                                Search
                            </h5>

                            <p className="text-muted">
                                Enter your departure,
                                destination and travel date.
                            </p>

                        </div>


                        {/* Step 2 */}
                        <div className="col-md-3">

                            <div className="step-number mx-auto">
                                2
                            </div>

                            <h5 className="fw-bold mt-3">
                                Select Bus
                            </h5>

                            <p className="text-muted">
                                Choose a bus according to
                                your preferred timing and price.
                            </p>

                        </div>


                        {/* Step 3 */}
                        <div className="col-md-3">

                            <div className="step-number mx-auto">
                                3
                            </div>

                            <h5 className="fw-bold mt-3">
                                Select Seat
                            </h5>

                            <p className="text-muted">
                                Select your preferred available
                                seat from the bus layout.
                            </p>

                        </div>


                        {/* Step 4 */}
                        <div className="col-md-3">

                            <div className="step-number mx-auto">
                                4
                            </div>

                            <h5 className="fw-bold mt-3">
                                Book & Travel
                            </h5>

                            <p className="text-muted">
                                Complete your payment and
                                receive your booking confirmation.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="about-cta py-5">

                <div className="container text-center text-white">

                    <h2 className="fw-bold">
                        Ready For Your Next Journey?
                    </h2>

                    <p className="mb-4">
                        Find your bus and book your ticket today.
                    </p>

                    <Link
                        to="/"
                        className="btn btn-light px-4 py-2 fw-semibold"
                    >
                        Search Buses
                    </Link>

                </div>

            </section>
            <Footer />
        </>
    )
}
