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
            <div className="strategy-container">
                <h2>AI Strategy Engine</h2>
                <p className="subtitle">Select a core engine to learn more</p>

                <div className="strategy-grid">
                    {strategies.map((strat) => (
                        <div
                            key={strat.id}
                            className={`strategy-card ${activeStrategy === strat.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveStrategy(strat.id)}
                            onMouseLeave={() => setActiveStrategy(null)}
                        >
                            <div className="strategy-icon">
                                {strat.id === 'ml' && '🧠'}
                                {strat.id === 'pattern' && '📉'}
                                {strat.id === 'rl' && '🤖'}
                            </div>
                            <h3>{strat.title}</h3>
                            <p className="strategy-desc">
                                {strat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategyEngine;
