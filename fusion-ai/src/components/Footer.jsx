import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>FusionAI</h3>
                    <p>Empowering traders with next-gen intelligence.</p>
                </div>
                <div className="footer-links">
                    <h4>Links</h4>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms & Conditions</a>
                </div>
                <div className="footer-social">
                    <h4>Social</h4>
                    <a href="#">Twitter</a>
                    <a href="#">Discord</a>
                    <a href="#">Telegram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} FusionAI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
