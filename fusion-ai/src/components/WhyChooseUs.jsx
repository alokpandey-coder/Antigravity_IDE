import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const brokers = [
        "IC Markets", "Exness", "Pepperstone", "XM Group", "FP Markets", 
        "FTMO", "Tickmill", "HFM", "Admirals", "Fusion Markets", 
        "BlackBull Markets", "EightCap", "Vantage", "OctaFX", "ThinkMarkets", 
        "Axi", "Global Prime", "RoboForex", "NXG Market"
    ];

    return (
        <section className="why-choose-us-section" id="brokers">
            <div className="brokers-container">
                <div className="brokers-header">
                    <div className="section-subtitle center">
                        <span className="line"></span> TRUSTED BROKERS <span className="line"></span>
                    </div>
                    <h2>
                        Compatible With <span className="text-gradient-purple">Global Brokers</span>
                    </h2>
                    <p className="brokers-desc">
                        Fusion AI integrates seamlessly with the world's most trusted regulated Forex brokers. You keep full control of your funds.
                    </p>
                </div>

                <div className="brokers-marquee-wrapper">
                    <div className="brokers-marquee-content">
                        {brokers.map((broker, index) => (
                            <div className="broker-tag" key={`b1-${index}`}>
                                {broker}
                            </div>
                        ))}
                        {brokers.map((broker, index) => (
                            <div className="broker-tag" key={`b2-${index}`}>
                                {broker}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="brokers-footer">
                    <span className="small-shield-icon">🛡️</span>
                    <span className="footer-text">
                        Your funds remain in your broker account. Fusion AI never takes custody of your funds.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
