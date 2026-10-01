import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./Contact.css";
import { Link } from 'react-router-dom';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Contact Form:", formData);

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
    };

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="contact-hero">

                <div className="contact-overlay"></div>

                <div className="container position-relative">

                    <div className="row min-vh-50 align-items-center">

                        <div className="col-lg-8 text-white">

                            <span className="badge bg-primary px-3 py-2 mb-3">
                                Contact Us
                            </span>

                            <h1 className="display-4 fw-bold">
                                We're Here To Help
                            </h1>

                            <p className="lead mt-3">
                                Have a question about your booking?
                                Get in touch with our support team.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Contact Information */}
            <section className="py-5">

                <div className="container">

                    <div className="row g-4">

                        {/* Phone */}
                        <div className="col-md-4">

                            <div className="contact-info-card text-center">

                                <div className="contact-icon mx-auto">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>

                                <h5 className="fw-bold mt-3">
                                    Call Us
                                </h5>

                                <p className="text-muted mb-1">
                                    Our support team is available
                                    to help you.
                                </p>

                                <a
                                    href="tel:+919876543210"
                                    className="text-decoration-none"
                                >
                                    +91 98765 43210
                                </a>

                            </div>

                        </div>


                        {/* Email */}
                        <div className="col-md-4">

                            <div className="contact-info-card text-center">

                                <div className="contact-icon mx-auto">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>

                                <h5 className="fw-bold mt-3">
                                    Email Us
                                </h5>

                                <p className="text-muted mb-1">
                                    Send us your questions
                                    anytime.
                                </p>

                                <a
                                    href="mailto:support@busbooking.com"
                                    className="text-decoration-none"
                                >
                                    support@busbooking.com
                                </a>

                            </div>

                        </div>


                        {/* Location */}
                        <div className="col-md-4">

                            <div className="contact-info-card text-center">

                                <div className="contact-icon mx-auto">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </div>

                                <h5 className="fw-bold mt-3">
                                    Visit Us
                                </h5>

                                <p className="text-muted mb-0">
                                    Bus Booking Office
                                    <br />
                                    Maharashtra, India
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Contact Form + Map */}
            <section className="py-5 bg-light">

                <div className="container">

                    <div className="row g-5">

                        {/* Contact Form */}
                        <div className="col-lg-7">

                            <div className="card border-0 shadow-sm">

                                <div className="card-body p-4 p-md-5">

                                    <span className="text-primary fw-semibold">
                                        SEND US A MESSAGE
                                    </span>

                                    <h2 className="fw-bold mt-2 mb-4">
                                        How Can We Help?
                                    </h2>

                                    {submitted && (
                                        <div className="alert alert-success">
                                            <i className="bi bi-check-circle me-2"></i>
                                            Thank you! Your message has
                                            been submitted successfully.
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>

                                        <div className="row g-3">

                                            {/* Name */}
                                            <div className="col-md-6">

                                                <label className="form-label fw-semibold">
                                                    Full Name
                                                </label>

                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />

                                            </div>


                                            {/* Email */}
                                            <div className="col-md-6">

                                                <label className="form-label fw-semibold">
                                                    Email Address
                                                </label>

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


                                            {/* Phone */}
                                            <div className="col-md-6">

                                                <label className="form-label fw-semibold">
                                                    Phone Number
                                                </label>

                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder="Enter phone number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    maxLength="10"
                                                />

                                            </div>


                                            {/* Subject */}
                                            <div className="col-md-6">

                                                <label className="form-label fw-semibold">
                                                    Subject
                                                </label>

                                                <select
                                                    name="subject"
                                                    className="form-select"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                >

                                                    <option value="">
                                                        Select subject
                                                    </option>

                                                    <option value="Booking">
                                                        Booking Issue
                                                    </option>

                                                    <option value="Payment">
                                                        Payment Issue
                                                    </option>

                                                    <option value="Cancellation">
                                                        Cancellation
                                                    </option>

                                                    <option value="Refund">
                                                        Refund
                                                    </option>

                                                    <option value="General">
                                                        General Inquiry
                                                    </option>

                                                </select>

                                            </div>


                                            {/* Message */}
                                            <div className="col-12">

                                                <label className="form-label fw-semibold">
                                                    Message
                                                </label>

                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    rows="5"
                                                    placeholder="Write your message..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>

                                            </div>


                                            {/* Submit */}
                                            <div className="col-12">

                                                <button
                                                    type="submit"
                                                    className="btn btn-primary px-4 py-2"
                                                >
                                                    <i className="bi bi-send me-2"></i>
                                                    Send Message
                                                </button>

                                            </div>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>


                        {/* Map / Office */}
                        <div className="col-lg-5">

                            <div className="card border-0 shadow-sm h-100">

                                <div className="card-body p-4">

                                    <h4 className="fw-bold mb-3">
                                        Our Office
                                    </h4>

                                    <p className="text-muted">
                                        Visit our office or contact our
                                        support team for assistance with
                                        your bus bookings.
                                    </p>

                                    <div className="office-map">

                                        <i className="bi bi-geo-alt-fill"></i>

                                        <h5 className="fw-bold mt-3">
                                            Maharashtra, India
                                        </h5>

                                        <p className="text-muted">
                                            Bus Reservation Support Center
                                        </p>

                                    </div>

                                    <div className="mt-4">

                                        <div className="d-flex mb-3">

                                            <i className="bi bi-clock text-primary fs-5 me-3"></i>

                                            <div>
                                                <strong>
                                                    Working Hours
                                                </strong>

                                                <p className="text-muted mb-0">
                                                    Monday - Sunday
                                                    <br />
                                                    8:00 AM - 10:00 PM
                                                </p>
                                            </div>

                                        </div>


                                        <div className="d-flex">

                                            <i className="bi bi-headset text-primary fs-5 me-3"></i>

                                            <div>
                                                <strong>
                                                    Customer Support
                                                </strong>

                                                <p className="text-muted mb-0">
                                                    Available 24/7
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* FAQ */}
            <section className="py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <span className="text-primary fw-semibold">
                            FAQ
                        </span>

                        <h2 className="fw-bold mt-2">
                            Frequently Asked Questions
                        </h2>

                    </div>


                    <div
                        className="accordion"
                        id="faqAccordion"
                    >

                        {/* FAQ 1 */}
                        <div className="accordion-item">

                            <h2 className="accordion-header">

                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqOne"
                                >
                                    How can I book a bus ticket?
                                </button>

                            </h2>

                            <div
                                id="faqOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#faqAccordion"
                            >

                                <div className="accordion-body">
                                    Enter your departure city,
                                    destination and travel date on
                                    the home page. Select a bus,
                                    choose your seat and complete
                                    the booking process.
                                </div>

                            </div>

                        </div>


                        {/* FAQ 2 */}
                        <div className="accordion-item">

                            <h2 className="accordion-header">

                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqTwo"
                                >
                                    Can I cancel my booking?
                                </button>

                            </h2>

                            <div
                                id="faqTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >

                                <div className="accordion-body">
                                    Yes. You can manage your booking
                                    from the My Bookings section,
                                    subject to the applicable
                                    cancellation policy.
                                </div>

                            </div>

                        </div>


                        {/* FAQ 3 */}
                        <div className="accordion-item">

                            <h2 className="accordion-header">

                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqThree"
                                >
                                    How can I contact customer support?
                                </button>

                            </h2>

                            <div
                                id="faqThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >

                                <div className="accordion-body">
                                    You can contact us by phone or
                                    email, or use the contact form
                                    available on this page.
                                </div>

                            </div>

                        </div>


                        {/* FAQ 4 */}
                        <div className="accordion-item">

                            <h2 className="accordion-header">

                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faqFour"
                                >
                                    What should I do if my payment fails?
                                </button>

                            </h2>

                            <div
                                id="faqFour"
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >

                                <div className="accordion-body">
                                    Check your payment method and
                                    try again. If the amount was
                                    deducted but your booking was
                                    not confirmed, contact our
                                    support team.
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Bottom CTA */}
            <section className="contact-cta py-5">

                <div className="container text-center text-white">

                    <h2 className="fw-bold">
                        Ready To Start Your Journey?
                    </h2>

                    <p className="mb-4">
                        Search for your bus and book your ticket today.
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

export default Contact