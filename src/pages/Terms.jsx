import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./Terms.css";
import { Link } from 'react-router-dom';

export default function Terms() {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <section className="terms-hero">

                <div className="terms-overlay"></div>

                <div className="container position-relative">

                    <div className="row align-items-center terms-hero-content">

                        <div className="col-lg-8 text-white">

                            <span className="badge bg-primary px-3 py-2 mb-3">
                                Legal Information
                            </span>

                            <h1 className="display-4 fw-bold">
                                Terms & Conditions
                            </h1>

                            <p className="lead mt-3 mb-0">
                                Please read these terms carefully before
                                using our bus reservation services.
                            </p>

                            <p className="small mt-3 mb-0">
                                Last Updated: October 1, 2026
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Main Content */}
            <section className="py-5">

                <div className="container">

                    <div className="row g-5">

                        {/* Sidebar */}
                        <div className="col-lg-3">

                            <div className="terms-sidebar sticky-lg-top">

                                <h6 className="fw-bold mb-3">
                                    Quick Navigation
                                </h6>

                                <a href="#introduction">
                                    Introduction
                                </a>

                                <a href="#account">
                                    User Account
                                </a>

                                <a href="#booking">
                                    Bus Booking
                                </a>

                                <a href="#payment">
                                    Payment
                                </a>

                                <a href="#cancellation">
                                    Cancellation & Refund
                                </a>

                                <a href="#passenger">
                                    Passenger Responsibilities
                                </a>

                                <a href="#operator">
                                    Bus Operators
                                </a>

                                <a href="#privacy">
                                    Privacy
                                </a>

                                <a href="#liability">
                                    Limitation of Liability
                                </a>

                                <a href="#changes">
                                    Changes to Terms
                                </a>

                                <a href="#contact">
                                    Contact Us
                                </a>

                            </div>

                        </div>


                        {/* Terms Content */}
                        <div className="col-lg-9">

                            <div className="terms-content">

                                {/* Introduction */}
                                <section id="introduction">

                                    <h2>1. Introduction</h2>

                                    <p>
                                        Welcome to our bus reservation
                                        platform. These Terms and Conditions
                                        govern your use of our website,
                                        application and bus booking services.
                                    </p>

                                    <p>
                                        By accessing or using our services,
                                        you agree to comply with these terms.
                                        If you do not agree with any part of
                                        these terms, please do not use our
                                        services.
                                    </p>

                                </section>


                                {/* Account */}
                                <section id="account">

                                    <h2>2. User Account</h2>

                                    <p>
                                        Certain features of our platform may
                                        require you to create an account.
                                        You are responsible for providing
                                        accurate and up-to-date information.
                                    </p>

                                    <ul>
                                        <li>
                                            You must provide valid personal
                                            information during registration.
                                        </li>

                                        <li>
                                            You are responsible for maintaining
                                            the confidentiality of your
                                            password.
                                        </li>

                                        <li>
                                            You should notify us if you
                                            suspect unauthorized access to
                                            your account.
                                        </li>

                                        <li>
                                            One account should not be used
                                            for fraudulent or unauthorized
                                            activities.
                                        </li>
                                    </ul>

                                </section>


                                {/* Booking */}
                                <section id="booking">

                                    <h2>3. Bus Booking</h2>

                                    <p>
                                        Our platform allows users to search
                                        for available buses, select seats and
                                        make reservations.
                                    </p>

                                    <p>
                                        When making a booking, you are
                                        responsible for verifying the
                                        following information before
                                        completing the payment:
                                    </p>

                                    <ul>
                                        <li>Travel date</li>
                                        <li>Departure location</li>
                                        <li>Destination</li>
                                        <li>Bus operator</li>
                                        <li>Departure time</li>
                                        <li>Selected seat</li>
                                        <li>Passenger details</li>
                                    </ul>

                                    <div className="terms-note">
                                        <i className="bi bi-info-circle me-2"></i>

                                        Please verify your booking details
                                        carefully before making payment.
                                    </div>

                                </section>


                                {/* Payment */}
                                <section id="payment">

                                    <h2>4. Payment</h2>

                                    <p>
                                        Payments must be completed using the
                                        payment methods made available on
                                        our platform.
                                    </p>

                                    <ul>
                                        <li>
                                            The total payable amount will be
                                            displayed before payment.
                                        </li>

                                        <li>
                                            You are responsible for providing
                                            correct payment information.
                                        </li>

                                        <li>
                                            A booking is considered confirmed
                                            only after successful payment and
                                            confirmation.
                                        </li>

                                        <li>
                                            In case of a failed transaction,
                                            you may need to retry the payment.
                                        </li>
                                    </ul>

                                </section>


                                {/* Cancellation */}
                                <section id="cancellation">

                                    <h2>5. Cancellation & Refund</h2>

                                    <p>
                                        Cancellation and refund conditions
                                        may vary depending on the bus
                                        operator and ticket type.
                                    </p>

                                    <p>
                                        If cancellation is permitted,
                                        applicable cancellation charges may
                                        be deducted from the refund amount.
                                    </p>

                                    <ul>
                                        <li>
                                            Check the cancellation policy
                                            before booking.
                                        </li>

                                        <li>
                                            Refund processing time may vary
                                            depending on the payment method.
                                        </li>

                                        <li>
                                            Some tickets may be non-refundable.
                                        </li>

                                        <li>
                                            Operator-specific policies may
                                            apply.
                                        </li>
                                    </ul>

                                </section>


                                {/* Passenger */}
                                <section id="passenger">

                                    <h2>6. Passenger Responsibilities</h2>

                                    <p>
                                        Passengers are expected to follow the
                                        rules and instructions provided by
                                        the bus operator.
                                    </p>

                                    <ul>
                                        <li>
                                            Carry valid identification when
                                            required.
                                        </li>

                                        <li>
                                            Arrive at the boarding point
                                            before departure.
                                        </li>

                                        <li>
                                            Provide accurate passenger
                                            information.
                                        </li>

                                        <li>
                                            Follow the operator's safety
                                            instructions.
                                        </li>

                                        <li>
                                            Do not engage in activities that
                                            may disturb other passengers.
                                        </li>
                                    </ul>

                                </section>


                                {/* Bus Operator */}
                                <section id="operator">

                                    <h2>7. Bus Operators</h2>

                                    <p>
                                        Bus services displayed on our
                                        platform may be operated by
                                        independent bus operators.
                                    </p>

                                    <p>
                                        Bus operators are responsible for
                                        providing the actual transportation
                                        service, including bus operations,
                                        schedules and onboard services.
                                    </p>

                                    <p>
                                        Departure times, routes, bus types
                                        and other operational details may
                                        change due to circumstances beyond
                                        our control.
                                    </p>

                                </section>


                                {/* Privacy */}
                                <section id="privacy">

                                    <h2>8. Privacy</h2>

                                    <p>
                                        We respect your privacy and handle
                                        personal information according to
                                        our Privacy Policy.
                                    </p>

                                    <p>
                                        Information such as your name,
                                        contact details and booking
                                        information may be required to
                                        process your reservations and
                                        provide customer support.
                                    </p>

                                    <Link
                                        to="/privacy"
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        View Privacy Policy
                                    </Link>

                                </section>


                                {/* Liability */}
                                <section id="liability">

                                    <h2>9. Limitation of Liability</h2>

                                    <p>
                                        We provide the reservation platform
                                        to facilitate bus ticket bookings.
                                        We are not responsible for events
                                        outside our reasonable control.
                                    </p>

                                    <p>
                                        This may include circumstances such
                                        as traffic conditions, weather,
                                        road closures, vehicle breakdowns,
                                        schedule changes or other
                                        operational circumstances.
                                    </p>

                                </section>


                                {/* Prohibited Activities */}
                                <section>

                                    <h2>10. Prohibited Activities</h2>

                                    <p>
                                        Users must not use our platform for
                                        unlawful or fraudulent activities.
                                    </p>

                                    <ul>
                                        <li>
                                            Creating fake accounts.
                                        </li>

                                        <li>
                                            Providing false information.
                                        </li>

                                        <li>
                                            Attempting unauthorized access
                                            to the platform.
                                        </li>

                                        <li>
                                            Using the service for fraudulent
                                            transactions.
                                        </li>

                                        <li>
                                            Interfering with the operation
                                            of the website or application.
                                        </li>

                                    </ul>

                                </section>


                                {/* Changes */}
                                <section id="changes">

                                    <h2>11. Changes to These Terms</h2>

                                    <p>
                                        We may update these Terms and
                                        Conditions from time to time.
                                    </p>

                                    <p>
                                        Updated terms will be published on
                                        this page along with the revised
                                        effective date.
                                    </p>

                                </section>


                                {/* Contact */}
                                <section id="contact">

                                    <h2>12. Contact Us</h2>

                                    <p>
                                        If you have questions regarding
                                        these Terms and Conditions, please
                                        contact our support team.
                                    </p>

                                    <div className="contact-box">

                                        <div className="d-flex mb-3">

                                            <i className="bi bi-envelope-fill text-primary fs-5 me-3"></i>

                                            <div>
                                                <strong>Email</strong>

                                                <div>
                                                    support@busbooking.com
                                                </div>
                                            </div>

                                        </div>


                                        <div className="d-flex">

                                            <i className="bi bi-telephone-fill text-primary fs-5 me-3"></i>

                                            <div>
                                                <strong>Phone</strong>

                                                <div>
                                                    +91 98765 43210
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </section>


                                {/* CTA */}
                                <div className="terms-footer">

                                    <h4 className="fw-bold">
                                        Ready to plan your journey?
                                    </h4>

                                    <p className="text-muted">
                                        Search for available buses and
                                        book your ticket today.
                                    </p>

                                    <Link
                                        to="/"
                                        className="btn btn-primary"
                                    >
                                        Search Buses
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
