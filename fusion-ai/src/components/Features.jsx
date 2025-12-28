import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features" id="features">
            <h2 className="section-title">
                Top Features of FusionAI Technology
            </h2>
            <div className="features-grid">
                <div className="feature-card glow-purple">
                    <div className="feature-icon">⭐</div>
                    <h3>100% Hands-Free Trading</h3>
                    <p>Smart algorithms trade for you—no screen time, no effort, just passive income.</p>
                </div>
                <div className="feature-card glow-blue">
                    <div className="feature-icon">📊</div>
                    <h3>Proprietary AI-Powered Algorithms</h3>
                    <p>AI strategies, battle-tested and adaptive, perform in any market.</p>
                </div>
                <div className="feature-card glow-gold">
                    <div className="feature-icon">👑</div>
                    <h3>Profit-Sharing Model</h3>
                    <p>You only pay when you make profit, our success is tied directly to yours.</p>
                </div>
            </div>

            <div className="features-grid secondary-grid">
                <div className="feature-card">
                    <div className="feature-icon">📈</div>
                    <h3>Risk Management Built-In</h3>
                    <p>FusionAI automates stop-losses, sizing, and allocation—no manual tweaks needed.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🎁</div>
                    <h3>Designed for Busy Professionals</h3>
                    <p>No charts. No stress. Just passive income with FusionAI.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
