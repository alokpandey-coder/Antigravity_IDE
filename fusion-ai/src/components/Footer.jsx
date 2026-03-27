import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>FusionAI</h3>
                    <p>Empowering traders with next-gen algorithmic intelligence and seamless market automation.</p>
                    <div className="footer-social">
                        <a href="#" aria-label="Twitter">𝕏</a>
                        <a href="#" aria-label="Discord">💬</a>
                        <a href="#" aria-label="Telegram">✈️</a>
                    </div>
                </div>
                
                <div className="footer-links-group">
                    <div className="footer-col">
                        <h4>About</h4>
                        <a href="#company">Company</a>
                        <a href="#careers">Careers</a>
                        <a href="#news">News</a>
                        <a href="#community">Community</a>
                    </div>
                    <div className="footer-col">
                        <h4>Tutorials</h4>
                        <a href="#guides">Guides</a>
                        <a href="#api">API Docs</a>
                        <a href="#video">Video Crypto</a>
                        <a href="#blog">Blog</a>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <a href="#support">Support Center</a>
                        <a href="#feedback">Feedback</a>
                        <a href="#business">Business Contacts</a>
                        <a href="#faq">FAQ</a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} FusionAI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
