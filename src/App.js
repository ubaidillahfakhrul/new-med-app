// Import necessary modules from React library
import React, { useEffect } from 'react';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import custom Navbar component
import Navbar from './NavBar/Navbar';
import Landing_Page from './Landing_Page/LandingPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouter for routing */}
      <h1>Ini diatas BrowserRouter</h1>
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
