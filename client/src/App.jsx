import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '10px 0', 
      background: '#222', 
      position: 'fixed', 
      top: '0', 
      width: '100%', 
      zIndex: '1000' 
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '20px', 
        padding: '0', 
        margin: '0' 
      }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>About</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

import React from 'react';

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1>Home Page</h1>
    </div>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
