import React from 'react';
import heroRobot from '../assets/hero_robot.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-grid">
                <div className="hero-image-container mobile-only">
                    <img src={heroRobot} alt="AI Trading Robot" className="hero-robot floating" />
                </div>
                <div className="hero-content">
                    <h1>
                        <span className="gradient-text">FusionAI</span>
                        <br />
                        Revolutionizing forex trading with advanced algorithmic solutions.
                    </h1>
                    <p>Combines financial expertise with cutting-edge technology. Provides automated tools for consistent, simplified trading.</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Discover Our Powerful Trading Algorithm !</button>
                        <a href="#/dashboard" className="btn-secondary dashboard-btn">
                            <span className="icon">📊</span> Live Market Dashboard
                        </a>
                    </div>
                </div>
                <div className="hero-image-container desktop-only">
                    <div className="glow-effect"></div>
                    <img src={heroRobot} alt="AI Trading Robot" className="hero-robot floating" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
