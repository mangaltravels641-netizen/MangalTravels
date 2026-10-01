import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h5 className="fw-bold mb-1"><i class="bi bi-bus-front-fill"></i> Mangal Travels</h5>
                        <p className="text-secondary small mb-0">
                            Simple, secure and comfortable bus booking.
                        </p>
                    </div>

                    <div className="col-md-6 text-md-end mt-3 mt-md-0">
                        <Link to="/about" className="text-white text-decoration-none me-3">
                            About
                        </Link>
                        <Link to="/contact" className="text-white text-decoration-none me-3">
                            Contact
                        </Link>
                        <Link to="/terms" className="text-white text-decoration-none">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
