import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import logo from '../assets/hero_img.jpg'

export default function Home() {
    const popularRoutes = [
        { from: "New Delhi", to: "Jaipur", price: "₹499", duration: "5h 30m" },
        { from: "Bangalore", to: "Mysore", price: "₹399", duration: "3h 15m" },
        { from: "Mumbai", to: "Pune", price: "₹350", duration: "3h 00m" },
    ];

    return (
        <div className='bg-light min-vh-100'>
            <Navbar />

            {/* ================= HERO ================= */}
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
                <div className="container py-5">
                    <div className="row align-items-center" style={{ minHeight: "500px" }}>
                        <div className="col-lg-6 text-white mb-5 mb-lg-0">
                            <span className="badge bg-info text-dark mb-3 px-3 py-2">
                                Safe <i class="bi bi-bus-front ms-1 me-1"></i> Comfortable <i class="bi bi-bus-front ms-1 me-1"></i> Affordable
                            </span>

                            <h1 className="display-3 fw-bold lh-1 mb-4">
                                Book Your Bus
                                <br />
                                Ticket Easily
                            </h1>

                            <p className="lead mb-4" style={{ maxWidth: "520px" }}>
                                Find and book comfortable bus journeys with
                                secure online booking and easy cancellation.
                            </p>

                            <div className="d-flex flex-wrap gap-3">
                                <span className="small"><i class="bi bi-bus-front"></i>{" "} 1000+ Bus Routes</span>
                                <span className="small"><i class="bi bi-bus-front"></i>{" "} Secure Payments</span>
                                <span className="small"><i class="bi bi-bus-front"></i>{" "} 24/7 Support</span>
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div className="card border-0 shadow-lg rounded-4">
                                <div className="card-body p-4 p-md-5">
                                    <div className="d-flex gap-4 mb-4">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="tripType"
                                                id="oneWay"
                                                defaultChecked
                                            />
                                            <label className="form-check-label fw-semibold" htmlFor="oneWay">
                                                One Way
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="tripType"
                                                id="roundTrip"
                                            />
                                            <label className="form-check-label fw-semibold" htmlFor="roundTrip">
                                                Round Trip
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                From
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white"><i class="bi bi-geo-alt-fill"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Departure city"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                To
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white"><i class="bi bi-geo-alt-fill"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Destination city"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-semibold">
                                                Journey Date
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white"><i class="bi bi-calendar3"></i></span>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <Link
                                                to="/buses"
                                                className="btn btn-primary w-100 py-3 fw-semibold"
                                            >
                                                🔍 Search Buses
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row g-4 text-center">
                        <div className="col-md-3">
                            <div className="p-3">
                                <div className="fs-1 mb-2">🚌</div>
                                <h6 className="fw-bold">Wide Range of Buses</h6>
                                <p className="text-muted small mb-0">
                                    AC, Non-AC, Sleeper and Seater buses.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="p-3">
                                <div className="fs-1 mb-2">🛡️</div>
                                <h6 className="fw-bold">Secure Booking</h6>
                                <p className="text-muted small mb-0">
                                    Safe and reliable online booking.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="p-3">
                                <div className="fs-1 mb-2">₹</div>
                                <h6 className="fw-bold">Best Prices</h6>
                                <p className="text-muted small mb-0">
                                    Great deals and affordable fares.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="p-3">
                                <div className="fs-1 mb-2">🎧</div>
                                <h6 className="fw-bold">24/7 Support</h6>
                                <p className="text-muted small mb-0">
                                    We are always here to help.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= POPULAR ROUTES ================= */}
            <section className="py-5">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="fw-bold mb-1">Popular Routes</h2>
                            <p className="text-muted mb-0">
                                Explore frequently booked bus routes.
                            </p>
                        </div>

                        <Link to="/buses" className="btn btn-outline-primary">
                            View All
                        </Link>
                    </div>

                    <div className="row g-4">
                        {popularRoutes.map((route, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card border-0 shadow-sm h-100 rounded-4">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <span className="text-muted small">Route</span>
                                                <h5 className="fw-bold mt-1 mb-2">
                                                    {route.from} → {route.to}
                                                </h5>
                                            </div>

                                            <span className="badge bg-primary-subtle text-primary">
                                                Popular
                                            </span>
                                        </div>

                                        <div className="d-flex justify-content-between text-muted small mb-3">
                                            <span>⏱ {route.duration}</span>
                                            <span>Starting from</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fs-5 fw-bold text-primary">
                                                {route.price}
                                            </span>

                                            <Link
                                                to="/buses"
                                                className="btn btn-sm btn-primary px-3"
                                            >
                                                View Buses
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-5 bg-primary text-white">
                <div className="container text-center">
                    <h2 className="fw-bold mb-2">Ready for your next journey?</h2>
                    <p className="mb-4">
                        Search thousands of buses and book your ticket in minutes.
                    </p>

                    <Link to="/buses" className="btn btn-light text-primary px-4 py-2">
                        Search Buses
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}
