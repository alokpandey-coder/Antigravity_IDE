import React from 'react';
import './Discover.css';

const Discover = () => {
    const statsData = [
        { icon: '📈', value: '8-15%', label: 'Average Monthly Return', colorClass: 'text-gradient-blue' },
        { icon: '🛡️', value: '<10%', label: 'Maximum Drawdown', colorClass: 'text-gradient-blue' },
        { icon: '🎯', value: '70-85%', label: 'Win Rate', colorClass: 'text-gradient-blue' },
        { icon: '⚡', value: '40.0K+', label: 'Trades Executed', colorClass: 'text-gradient-orange' },
        { icon: '👥', value: '60K+', label: 'Active Users', colorClass: 'text-gradient-blue' },
        { icon: '🌐', value: '3+', label: 'Markets Traded', colorClass: 'text-gradient-blue' }
    ];

    return (
        <section className="discover-section" id="trading-algorithm">
            <div className="discover-container">
                <div className="discover-header">
                    <div className="section-subtitle center">
                        <span className="line"></span> LIVE AI PERFORMANCE <span className="line"></span>
                    </div>
                    <h2>
                        Real Results. <span className="text-gradient-blue">Real Returns.</span>
                    </h2>
                    <p className="discover-desc">
                        Our AI algorithms are built using advanced market data, backtested strategies, and real-time market analysis to deliver consistent trading performance with controlled risk.
                    </p>
                </div>

                <div className="discover-stats-grid">
                    {statsData.map((stat, index) => (
                        <div className="discover-stat-card" key={index}>
                            <div className="discover-stat-icon">{stat.icon}</div>
                            <div className={`discover-huge-value ${stat.colorClass}`}>{stat.value}</div>
                            <div className="discover-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="discover-cta-container">
                    <button className="btn-primary-gradient huge-btn">View Verified Results</button>
                </div>
            </div>
        </section>
    );
};

export default Discover;
