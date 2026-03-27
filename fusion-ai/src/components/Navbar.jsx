import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import logo from '../assets/finalfusionlogo.png';
import './Navbar.css';

const Navbar = ({ activeHash }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { currency, updateCurrency, currencies } = useCurrency();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">
                    <img src={logo} alt="FusionAI" className="logo-img circular-logo" />
                    <span>Fusion<span className="logo-text-ai">AI</span></span>
                </a>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home" className={activeHash === '#home' || activeHash === '#/' ? 'active-link' : ''} onClick={() => setIsOpen(false)}>Home</a>

                    <a href="#/trade" className={activeHash === '#/trade' ? 'active-link' : 'nav-link trade-link'} onClick={() => setIsOpen(false)}>Trade <span className="ai-badge">AI</span></a>

                    <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#risk-simulator" className="nav-link special-link" onClick={() => setIsOpen(false)}>Investment Risk Simulator</a>

                    <button className="btn-primary" onClick={() => setIsOpen(false)}>Call To Action</button>
                </div>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '✕' : '☰'}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
