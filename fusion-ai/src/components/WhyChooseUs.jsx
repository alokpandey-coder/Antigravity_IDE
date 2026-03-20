import React from 'react';
import teamRobots from '../assets/team_robots.png';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section className="why-us" id="why-us">
            <h2 className="section-title">Streamline Your Trading Process</h2>
            <div className="why-container">
                <div className="why-image">
                    <img src={teamRobots} alt="FusionAI Team" className="team-robots floating" />
                </div>
                <div className="why-content">
                    <div className="streamline-item">
                        <div className="check-icon">✅</div>
                        <div className="streamline-text">
                            <h3>Manage Your Portfolio</h3>
                            <p>Link all your broker accounts and effortlessly manage them through our trading terminal—completely free!</p>
                        </div>
                    </div>

                    <div className="streamline-item">
                        <div className="check-icon">✅</div>
                        <div className="streamline-text">
                            <h3>Trailing Features</h3>
                            <p>Monitor price movements and automate your buy/sell actions when the trend shifts direction.</p>
                        </div>
                    </div>

                    <div className="streamline-item">
                        <div className="check-icon">✅</div>
                        <div className="streamline-text">
                            <h3>Trading Programs</h3>
                            <p>Effortlessly copy other traders or trade autonomously using our advanced trading AI.</p>
                        </div>
                    </div>

                    <div className="streamline-item">
                        <div className="check-icon">✅</div>
                        <div className="streamline-text">
                            <h3>Trading Algos</h3>
                            <p>Utilize tools like DCA, market-making, arbitrage, or our free charting software.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
