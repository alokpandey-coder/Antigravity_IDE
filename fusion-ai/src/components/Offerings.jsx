import React from 'react';
import './Offerings.css';

const Offerings = () => {
    const listItems = [
        { icon: '🏦', text: 'Funds Always In Your Broker Account' },
        { icon: '⚙️', text: 'Advanced Risk Management System' },
        { icon: '🛡️', text: 'Stop Loss & Drawdown Protection' },
        { icon: '🔒', text: 'Encrypted Software Connection' },
        { icon: '📊', text: 'Full Transparency & Trade Monitoring' },
        { icon: '✅', text: 'No Manual Intervention Required' }
    ];

    return (
        <section className="offerings-section" id="what-we-offer">
            <div className="offerings-grid">
                {/* Left Content */}
                <div className="offerings-left">
                    <div className="section-subtitle">
                        <span className="line"></span> SECURITY FIRST <span className="line"></span>
                    </div>
                    <h2>
                        Your Funds. <span className="text-blue">Your<br />Control.</span>
                    </h2>
                    <p className="offerings-desc">
                        Fusion AI is designed with security and risk control as the top priority. We never access your funds — the software only executes trades via secure broker integration.
                    </p>
                    
                    <div className="security-list">
                        {listItems.map((item, index) => (
                            <div className="security-list-item" key={index}>
                                <div className="security-icon-box">{item.icon}</div>
                                <span className="security-text">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className="offerings-right">
                    <div className="safe-card">
                        <div className="lock-icon-container">
                            <span className="huge-lock">🔐</span>
                        </div>
                        <h3 className="safe-title">Your Funds Are Always Safe</h3>
                        <p className="safe-desc">
                            Fusion AI connects to your broker account through read + execute permissions only. We can never withdraw, transfer, or access your capital directly.
                        </p>
                        <div className="green-bullets-box">
                            <span className="bullet-item"><span className="g-check">✓</span> Non-Custodial</span>
                            <span className="bullet-item"><span className="g-check">✓</span> Regulated Brokers</span>
                            <span className="bullet-item"><span className="g-check">✓</span> Full Transparency</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offerings;
