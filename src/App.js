// Import necessary modules from React library
import React, { useEffect } from 'react';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import custom Navbar component
import Navbar from './NavBar/Navbar';
import Landing_Page from './Landing_Page/LandingPage';
import LoginPage from './Login/Login.js';
import logo from './logo.svg';
import './App.css';
import SignUpPage from './Sign_Up/Sign_Up.js';

function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouter for routing */}
      <h1>Ini diatas BrowserRouter</h1>
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar/>
        {/* <LoginPage /> */}
        {/* <SignUpPage /> */}
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
