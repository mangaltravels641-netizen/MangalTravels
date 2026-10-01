import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Profile() {
    const [isEditing, setIsEditing] = useState(false);

    const [user, setUser] = useState({
        firstName: "Shahbaz",
        lastName: "Patel",
        email: "shahbaz@gmail.com",
        phone: "9876543210",
        gender: "Male",
        dateOfBirth: "1998-05-15",
        address: "Kharalwadi, Urdu Primary Schook, Pimpri",
        city: "Pune",
        state: "Maharashtra",
        pincode: "423601"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSave = (e) => {
        e.preventDefault();

        setIsEditing(false);

        console.log("Updated User:", user);
    };

    return (
        <div className='bg-light'>
            <Navbar />
                {/* Page Header */}
                <div className='container'>
                    <div className="d-flex justify-content-between align-items-center my-4">

                        <div>
                            <h2 className="fw-bold mb-1">
                                My Profile
                            </h2>

                            <p className="text-muted mb-0">
                                Manage your personal information
                            </p>
                        </div>

                        {!isEditing && (
                            <button
                                className="btn btn-primary"
                                onClick={() => setIsEditing(true)}
                            >
                                <i className="bi bi-pencil me-2"></i>
                                Edit Profile
                            </button>
                        )}

                    </div>
                </div>

                <div className='container'>
                    <div className="row my-4">

                        {/* Profile Card */}
                        <div className="col-lg-4">

                            <div className="card border-0 shadow-sm text-center">

                                <div className="card-body py-5">

                                    {/* Profile Image */}
                                    <div
                                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                                        style={{
                                            width: "110px",
                                            height: "110px",
                                            fontSize: "40px"
                                        }}
                                    >
                                        {user.firstName.charAt(0)}
                                        {user.lastName.charAt(0)}
                                    </div>

                                    <h4 className="fw-bold mb-1">
                                        {user.firstName} {user.lastName}
                                    </h4>

                                    <p className="text-muted mb-3">
                                        {user.email}
                                    </p>

                                    <span className="badge bg-success">
                                        Active User
                                    </span>

                                    <hr className="my-4" />

                                    <div className="text-start">

                                        <div className="mb-3">
                                            <small className="text-muted">
                                                Member Since
                                            </small>

                                            <div className="fw-semibold">
                                                January 2026
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <small className="text-muted">
                                                Total Bookings
                                            </small>

                                            <div className="fw-semibold">
                                                12 Bookings
                                            </div>
                                        </div>

                                        <div>
                                            <small className="text-muted">
                                                Account Status
                                            </small>

                                            <div className="fw-semibold text-success">
                                                Verified
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* Personal Information */}
                        <div className="col-lg-8">

                            <div className="card border-0 shadow-sm">

                                <div className="card-body p-4">

                                    <h5 className="fw-bold mb-4">
                                        Personal Information
                                    </h5>

                                    <form onSubmit={handleSave}>

                                        <div className="row g-3">

                                            {/* First Name */}
                                            <div className="col-md-6">

                                                <label className="form-label">
                                                    First Name
                                                </label>

                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    className="form-control"
                                                    value={user.firstName}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                />

                                            </div>


                                            {/* Last Name */}
                                            <div className="col-md-6">

                                                <label className="form-label">
                                                    Last Name
                                                </label>

                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    className="form-control"
                                                    value={user.lastName}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                />

                                            </div>


                                            {/* Email */}
                                            <div className="col-md-6">

                                                <label className="form-label">
                                                    Email Address
                                                </label>

                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    value={user.email}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                />

                                            </div>


                                            {/* Phone */}
                                            <div className="col-md-6">

                                                <label className="form-label">
                                                    Phone Number
                                                </label>

                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    className="form-control"
                                                    value={user.phone}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                />

                                            </div>


                                            {/* Gender */}
                                            <div className="col-md-6">

                                                <label className="form-label">
                                                    Gender
                                                </label>

                                                <select
                                                    name="gender"
                                                    className="form-select"
                                                    value={user.gender}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                >
                                                    <option value="Male">
                                                        Male
                                                    </option>

                                                    <option value="Female">
                                                        Female
                                                    </option>

                                                    <option value="Other">
                                                        Other
                                                    </option>

                                                </select>

                                            </div>


                                            {/* Date of Birth */}
                                            <div className="col-md-6">

                                                <label className="form-label">
                                                    Date of Birth
                                                </label>

                                                <input
                                                    type="date"
                                                    name="dateOfBirth"
                                                    className="form-control"
                                                    value={user.dateOfBirth}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                />

                                            </div>

                                        </div>


                                        <hr className="my-4" />


                                        {/* Address */}
                                        <h5 className="fw-bold mb-4">
                                            Address Information
                                        </h5>

                                        <div className="row g-3">

                                            {/* Address */}
                                            <div className="col-12">

                                                <label className="form-label">
                                                    Address
                                                </label>

                                                <textarea
                                                    name="address"
                                                    className="form-control"
                                                    rows="2"
                                                    value={user.address}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                />

                                            </div>


                                            {/* City */}
                                            <div className="col-md-4">

                                                <label className="form-label">
                                                    City
                                                </label>

                                                <input
                                                    type="text"
                                                    name="city"
                                                    className="form-control"
                                                    value={user.city}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                />

                                            </div>


                                            {/* State */}
                                            <div className="col-md-4">

                                                <label className="form-label">
                                                    State
                                                </label>

                                                <select
                                                    name="state"
                                                    className="form-select"
                                                    value={user.state}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                >

                                                    <option value="Maharashtra">
                                                        Maharashtra
                                                    </option>

                                                    <option value="Gujarat">
                                                        Gujarat
                                                    </option>

                                                    <option value="Goa">
                                                        Goa
                                                    </option>

                                                    <option value="Karnataka">
                                                        Karnataka
                                                    </option>

                                                </select>

                                            </div>


                                            {/* Pincode */}
                                            <div className="col-md-4">

                                                <label className="form-label">
                                                    Pincode
                                                </label>

                                                <input
                                                    type="text"
                                                    name="pincode"
                                                    className="form-control"
                                                    value={user.pincode}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                />

                                            </div>

                                        </div>


                                        {/* Buttons */}
                                        {isEditing && (

                                            <div className="d-flex justify-content-end gap-2 mt-4">

                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    onClick={() => setIsEditing(false)}
                                                >
                                                    Cancel
                                                </button>

                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    <i className="bi bi-check-lg me-2"></i>
                                                    Save Changes
                                                </button>

                                            </div>

                                        )}

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            <Footer />
        </div>
    )
}

export default Profile;