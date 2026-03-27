import React from 'react';
import './Features.css';

const Features = () => {
    const featureList = [
        "Fully Automated System",
        "AI Market Analysis",
        "Smart Risk Management",
        "News Filter Protection",
        "Multi-Pair Trading",
        "Gold & Forex Trading",
        "24/5 Automated Trading",
        "VPS Supported",
        "Beginner Friendly",
        "No Manual Trading",
        "Real-Time Monitoring",
        "Secure Integration"
    ];

    return (
        <section className="features-section" id="features">
            <div className="features-grid-layout">
                {/* Left Content */}
                <div className="features-left">
                    <div className="section-subtitle">
                        <span className="line"></span> CAPABILITIES <span className="line"></span>
                    </div>
                    <h2>
                        Powerful Features For<br />
                        <span className="text-gradient-purple">Smart Trading</span>
                    </h2>
                    <p className="features-desc">
                        Everything you need for disciplined, intelligent, fully automated trading — built into one seamless platform.
                    </p>
                    
                    <div className="feature-items-grid">
                        {featureList.map((feature, index) => (
                            <div className="feature-list-item" key={index}>
                                <span className="check-icon">✓</span>
                                <span className="feature-text">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Engine Card */}
                <div className="features-right">
                    <div className="engine-card">
                        <div className="engine-visual">
                            <div className="circle-outer">
                                <div className="circle-inner">
                                    <div className="circle-core">
                                        <span className="lightning-icon">⚡</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <h3 className="engine-title">AI Trading Engine</h3>
                        <p className="engine-subtitle">Analyzing markets 24 hours, 5 days a week</p>
                        
                        <div className="engine-stats">
                            <div className="engine-stat-box">
                                <div className="engine-stat-value">99.9%</div>
                                <div className="engine-stat-label">Uptime</div>
                            </div>
                            <div className="engine-stat-box">
                                <div className="engine-stat-value">&lt;50ms</div>
                                <div className="engine-stat-label">Execution</div>
                            </div>
                            <div className="engine-stat-box">
                                <div className="engine-stat-value">0</div>
                                <div className="engine-stat-label">Emotion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
