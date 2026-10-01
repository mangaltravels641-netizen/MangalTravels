import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

function Bookings() {
    const bookings = [
        {
            id: "BK-1001",
            busName: "Neeta Travels",
            busNumber: "MH-15-AB-1234",
            from: "Mumbai",
            to: "Pune",
            date: "2026-10-05",
            departure: "08:00 AM",
            arrival: "12:00 PM",
            seat: "A1",
            passengerName: "Shahbaz",
            amount: 650,
            status: "Confirmed"
        },
        {
            id: "BK-1002",
            busName: "VRL Travels",
            busNumber: "MH-12-CD-5678",
            from: "Pune",
            to: "Nashik",
            date: "2026-10-10",
            departure: "10:30 AM",
            arrival: "02:30 PM",
            seat: "B4",
            passengerName: "Shahbaz",
            amount: 550,
            status: "Confirmed"
        },
        {
            id: "BK-1003",
            busName: "SRS Travels",
            busNumber: "MH-14-EF-9012",
            from: "Nashik",
            to: "Mumbai",
            date: "2026-09-20",
            departure: "06:00 PM",
            arrival: "10:00 PM",
            seat: "C2",
            passengerName: "Shahbaz",
            amount: 600,
            status: "Completed"
        }
    ];

    return (
        <div className='bg-light'>
            <Navbar />
            <div className="container py-5">

                {/* Page Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">My Bookings</h2>
                        <p className="text-muted mb-0">
                            View and manage your bus bookings
                        </p>
                    </div>

                    <Link to="/" className="btn btn-primary">
                        Book New Ticket
                    </Link>
                </div>

                {/* Bookings */}
                {bookings.length === 0 ? (
                    <div className="text-center py-5">
                        <h4>No bookings found</h4>
                        <p className="text-muted">
                            You haven't booked any bus tickets yet.
                        </p>

                        <Link to="/" className="btn btn-primary">
                            Search Buses
                        </Link>
                    </div>
                ) : (
                    <div className="row g-4">

                        {bookings.map((booking) => (
                            <div className="col-12" key={booking.id}>

                                <div className="card shadow-sm border-0">

                                    <div className="card-body">

                                        {/* Top Section */}
                                        <div className="d-flex justify-content-between align-items-start mb-3">

                                            <div>
                                                <h5 className="fw-bold mb-1">
                                                    {booking.busName}
                                                </h5>

                                                <small className="text-muted">
                                                    Bus No: {booking.busNumber}
                                                </small>
                                            </div>

                                            <span
                                                className={`badge ${booking.status === "Confirmed"
                                                        ? "bg-success"
                                                        : "bg-secondary"
                                                    }`}
                                            >
                                                {booking.status}
                                            </span>

                                        </div>

                                        <hr />

                                        {/* Journey Details */}
                                        <div className="row text-center">

                                            <div className="col-md-3 mb-3 mb-md-0">
                                                <small className="text-muted">
                                                    FROM
                                                </small>

                                                <h5 className="fw-bold">
                                                    {booking.from}
                                                </h5>

                                                <span className="text-muted">
                                                    {booking.departure}
                                                </span>
                                            </div>

                                            <div className="col-md-1 d-flex align-items-center justify-content-center">
                                                <span className="fs-4">
                                                    →
                                                </span>
                                            </div>

                                            <div className="col-md-3 mb-3 mb-md-0">
                                                <small className="text-muted">
                                                    TO
                                                </small>

                                                <h5 className="fw-bold">
                                                    {booking.to}
                                                </h5>

                                                <span className="text-muted">
                                                    {booking.arrival}
                                                </span>
                                            </div>

                                            <div className="col-md-2 mb-3 mb-md-0">
                                                <small className="text-muted">
                                                    DATE
                                                </small>

                                                <h6 className="fw-bold">
                                                    {booking.date}
                                                </h6>
                                            </div>

                                            <div className="col-md-1 mb-3 mb-md-0">
                                                <small className="text-muted">
                                                    SEAT
                                                </small>

                                                <h6 className="fw-bold">
                                                    {booking.seat}
                                                </h6>
                                            </div>

                                            <div className="col-md-2">
                                                <small className="text-muted">
                                                    AMOUNT
                                                </small>

                                                <h5 className="fw-bold text-primary">
                                                    ₹{booking.amount}
                                                </h5>
                                            </div>

                                        </div>

                                        <hr />

                                        {/* Bottom Section */}
                                        <div className="d-flex justify-content-between align-items-center">

                                            <div>
                                                <small className="text-muted">
                                                    Booking ID
                                                </small>

                                                <div className="fw-bold">
                                                    {booking.id}
                                                </div>
                                            </div>

                                            <div className="d-flex gap-2">

                                                <Link
                                                    to={`/booking/${booking.id}`}
                                                    className="btn btn-outline-primary btn-sm"
                                                >
                                                    View Details
                                                </Link>

                                                {booking.status === "Confirmed" && (
                                                    <button className="btn btn-outline-danger btn-sm">
                                                        Cancel Booking
                                                    </button>
                                                )}

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>
            <Footer />
        </div>
    )
}

export default Bookings;