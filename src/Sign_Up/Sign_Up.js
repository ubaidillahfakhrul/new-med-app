import React, { useState } from 'react';
import './Sign_Up.css'; // Pastikan file CSS berada di path yang benar

const SignUpPage = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, password } = e.target.elements;
    let newErrors = {};

    if (!name.value.trim()) newErrors.name = 'Name is required.';
    if (!/^\d{10}$/.test(phone.value)) newErrors.phone = 'Phone number must be exactly 10 digits.';
    if (!/\S+@\S+\.\S+/.test(email.value)) newErrors.email = 'Email is invalid.';
    if (!password.value.trim()) newErrors.password = 'Password is required.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Sign up successful!");
      // lanjutkan pengiriman data...
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      {/* Grid layout for sign-up form */}
      <div className="signup-grid">
        {/* Title for the sign-up form */}
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        {/* Text for existing members to log in */}
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member?{' '}
          <span>
            <a href="../Login/Login.html" style={{ color: '#2190FF' }}>
              Login
            </a>
          </span>
        </div>
        {/* Form for user sign-up */}
        <div className="signup-form">
          <form>
            {/* User's name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
            </div>

            {/* User's phone */}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
              />
            </div>

            {/* User's email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
            </div>

            {/* User's password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>

            {/* Buttons */}
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                Submit
              </button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
