import React, { useState } from 'react';
import './Sign_Up.css'; // Pastikan file CSS berada di path yang benar
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config.js';

// Function component for Sign Up form
const SignUpPage = () => {
  // State variables using useState hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showerr, setShowerr] = useState(''); // State to show error messages
  const navigate = useNavigate(); // Navigation hook from react-router

  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const register = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
     // API Call to register user
     const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          phone: phone,
      }),
    });

    const json = await response.json(); // Parse the response JSON
    if (json.authtoken) {
      // Store user data in session storage
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("phone", phone);
      sessionStorage.setItem("email", email);
      // Redirect user to home page
      navigate("/");
      window.location.reload(); // Refresh the page
    } else {
      if (json.errors) {
        for (const error of json.errors) {
            setShowerr(error.msg); // Show error messages
        }
      } else {
        setShowerr(json.error);
      }
    }
  };

   // JSX to render the Sign Up form
   return (
    <div className='container' style={{marginTop:'5%'}}>
      <div className='signup-grid'>
        <div className="signup-form">
        <form method="POST" onSubmit={register}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

          </div>
          {/* Apply similar logic for other form elements like name, phone, and password to capture user information */}
        </form>
        </div>
      </div>
    </div>

  );
}

export default SignUpPage;
