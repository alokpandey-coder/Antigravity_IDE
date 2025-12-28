import React from 'react';
import tradingRobot from '../assets/trading_robot.png';
import './Discover.css';

const Discover = () => {
    return (
        <section className="discover" id="offerings">
            <div className="discover-container">
                <div className="discover-image">
                    <img src={tradingRobot} alt="AI Trading Algorithm" className="trading-robot" />
                </div>
                <div className="discover-content">
                    <h2>Discover Our Powerful<br />Trading Algorithm !</h2>

                    <div className="discover-card">
                        <p className="highlight-text">
                            Our powerful trading algorithms are designed to elevate your investment strategies.
                        </p>
                        <ul className="discover-list">
                            <li>Use real-time market data for fast decision making</li>
                            <li>Deliver precise and profitable trades</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discover;
