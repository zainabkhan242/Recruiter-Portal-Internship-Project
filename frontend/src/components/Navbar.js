import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>GTS Resume Matcher</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recruiter">Recruiter Portal</Link></li>
        <li><Link to="/upload">Resume Upload</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
