import React, { useState } from 'react';
import './StrategyEngine.css';

const StrategyEngine = () => {
    const [activeStrategy, setActiveStrategy] = useState(null);

    const strategies = [
        {
            id: 'ml',
            title: 'ML-based Price Prediction',
            description: 'Uses historical data and deep learning models to forecast future price movements with high probability.'
        },
        {
            id: 'pattern',
            title: 'Pattern Recognition',
            description: 'Identifies key chart patterns like Breakouts and Reversals instantly to trigger timely trade execution.'
        },
        {
            id: 'rl',
            title: 'Reinforcement Learning',
            description: 'Self-improving algo that learns from market changes in real-time, optimizing strategies continuously.'
        }
    ];

    return (
        <section className="strategy-engine-section">
            <div className="particles-bg">
                <div className="particle p-1"></div>
                <div className="particle p-2"></div>
                <div className="particle p-3"></div>
                <div className="particle p-4"></div>
            </div>
            
            <div className="ambient-glow"></div>

            <div className="strategy-container">
                <div className="header-wrapper">
                    <h2 className="gradient-title">AI Strategy Engine</h2>
                    <p className="subtitle shimmer">Select a core engine to learn more</p>
                </div>

                <div className="strategy-flow">
                    {/* SVG Connecting Path */}
                    <div className="connection-line-container">
                        <svg className="connection-line" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="flow-path" d="M 150 50 Q 500 100 850 50" fill="none" />
                        </svg>
                    </div>

                    <div className="strategy-grid staggered-grid">
                        {strategies.map((strat, idx) => (
                            <div
                                key={strat.id}
                                className={`glass-card strat-card pulse-hover delay-${idx} ${activeStrategy === strat.id ? 'active' : ''}`}
                                onMouseEnter={() => setActiveStrategy(strat.id)}
                                onMouseLeave={() => setActiveStrategy(null)}
                            >
                                <div className="icon-wrapper">
                                    {strat.id === 'ml' && (
                                        <svg className="dynamic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                    )}
                                    {strat.id === 'pattern' && (
                                        <svg className="dynamic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l6-6 4 4 8-8" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
                                        </svg>
                                    )}
                                    {strat.id === 'rl' && (
                                        <svg className="dynamic-icon animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="card-title">{strat.title}</h3>
                                <p className="card-desc">
                                    {strat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategyEngine;
