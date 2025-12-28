import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Navbar.css';

const Navbar = ({ activeHash }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#/" className="navbar-logo">
                    <img src={logo} alt="FusionAI" className="logo-img" />
                    <span>FusionAI</span>
                </a>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a href="#/" className={activeHash === '#/' ? 'active-link' : ''}>Home</a>
                    <a href="#features">Services</a>
                    <a href="#what-we-offer">Offerings</a>
                    <a href="#/about" className={activeHash === '#/about' ? 'active-link' : ''}>About</a>
                    <button className="btn-primary">Call To Action</button>
                </div>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
