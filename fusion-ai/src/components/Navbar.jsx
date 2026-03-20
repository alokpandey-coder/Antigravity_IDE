import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import logo from '../assets/logo.svg';
import './Navbar.css';

const Navbar = ({ activeHash }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { currency, updateCurrency, currencies } = useCurrency();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#/" className="navbar-logo">
                    <img src={logo} alt="FusionAI" className="logo-img" />
                    <span>FusionAI</span>
                </a>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a href="#/" className={activeHash === '#/' ? 'active-link' : ''}>Home</a>

                    <a href="#/trade" className={activeHash === '#/trade' ? 'active-link' : 'nav-link trade-link'}>Trade <span className="ai-badge">AI</span></a>

                    <div className="nav-item dropdown">
                        <span className="nav-link">Pricing</span>
                        <div className="dropdown-content">
                            <a href="#/pricing/commissions">Commissions</a>
                            <a href="#/pricing/margin-rates">Margin Rates</a>
                            <a href="#/pricing/interest-rates">Interest Rates</a>
                            <a href="#/pricing/short-sale-cost">Short Sale Cost</a>
                            <a href="#/pricing/research-news">Research and News</a>
                            <a href="#/pricing/market-data">Market Data Pricing</a>
                            <a href="#/pricing/stock-yield">Stock Yield Enhancement</a>
                            <a href="#/pricing/other-fees">Other Fees</a>
                        </div>
                    </div>

                    <a href="#features">Services</a>
                    <a href="#what-we-offer">Offerings</a>

                    <div className="nav-item dropdown currency-dropdown">
                        <span className="nav-link">{currency.code} ({currency.symbol})</span>
                        <div className="dropdown-content">
                            {Object.values(currencies).map((curr) => (
                                <div
                                    key={curr.code}
                                    className="dropdown-item"
                                    onClick={() => updateCurrency(curr.code)}
                                >
                                    {curr.code} - {curr.name}
                                </div>
                            ))}
                        </div>
                    </div>

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
