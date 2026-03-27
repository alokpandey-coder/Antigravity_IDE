import React, { useState } from 'react';
import './Hero.css';
import './HeroModal.css';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(false);

    const openLiveResults = () => {
        setIsModalOpen(true);
        if (marketData.length === 0) {
            setLoading(true);
            fetch('https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","BNBUSDT","SOLUSDT","XRPUSDT"]')
                .then(res => res.json())
                .then(data => {
                    setMarketData(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Failed to fetch market data:', err);
                    setLoading(false);
                });
        }
    };

    return (
        <section className="hero-section" id="home">
            <div className="hero-grid">
                {/* Left Content */}
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot"></span> AI POWERED TRADING
                    </div>
                    <h1>
                        AI Powered<br />
                        <span className="text-gradient">Forex Trading</span><br />
                        Automation
                    </h1>
                    <p className="hero-description">
                        Fusion AI is a fully automated algorithmic trading software designed to execute trades with advanced AI strategies, smart risk management, and precision execution.
                    </p>
                    <div className="hero-buttons-container">
                        <div className="hero-buttons-row">
                            <button className="btn-primary-gradient">Start Automated Trading</button>
                            <button className="btn-secondary-outline" onClick={openLiveResults}>VIEW LIVE RESULT</button>
                        </div>
                        <div className="hero-buttons-row">
                            <button className="btn-dark-green">Book Free Demo</button>
                        </div>
                    </div>
                    <div className="hero-features-list">
                        <span className="feature-item"><span className="green-dot"></span>Regulated Brokers</span>
                        <span className="feature-item"><span className="green-dot"></span>Fully Automated</span>
                        <span className="feature-item"><span className="green-dot"></span>Smart Risk Management</span>
                        <span className="feature-item"><span className="green-dot"></span>24/5 Trading</span>
                    </div>
                </div>

                {/* Right Content - Chart Card */}
                <div className="hero-chart-container">
                    <div className="performance-card">
                        <div className="card-header">
                            <span className="header-title">LIVE PERFORMANCE</span>
                            <span className="live-badge"><span className="live-dot"></span> LIVE</span>
                        </div>
                        
                        <div className="chart-visual">
                            {/* Simple SVG Chart representing a rising trend */}
                            <svg viewBox="0 0 400 150" className="trend-svg">
                                <defs>
                                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="rgba(75, 123, 255, 0.4)" />
                                        <stop offset="100%" stopColor="rgba(75, 123, 255, 0)" />
                                    </linearGradient>
                                </defs>
                                <path fill="url(#chartGlow)">
                                    <animate 
                                        attributeName="d" 
                                        values="M 0,120 Q 50,110 100,90 T 200,60 T 300,30 T 400,20 L 400,150 L 0,150 Z; M 0,118 Q 50,115 100,85 T 200,65 T 300,25 T 400,15 L 400,150 L 0,150 Z; M 0,122 Q 50,105 100,95 T 200,55 T 300,35 T 400,25 L 400,150 L 0,150 Z; M 0,119 Q 50,112 100,88 T 200,62 T 300,28 T 400,18 L 400,150 L 0,150 Z; M 0,120 Q 50,110 100,90 T 200,60 T 300,30 T 400,20 L 400,150 L 0,150 Z" 
                                        dur="8s" 
                                        repeatCount="indefinite" 
                                    />
                                </path>
                                <path fill="none" stroke="#4b7bff" strokeWidth="3" className="pulsing-line">
                                    <animate 
                                        attributeName="d" 
                                        values="M 0,120 Q 50,110 100,90 T 200,60 T 300,30 T 400,20; M 0,118 Q 50,115 100,85 T 200,65 T 300,25 T 400,15; M 0,122 Q 50,105 100,95 T 200,55 T 300,35 T 400,25; M 0,119 Q 50,112 100,88 T 200,62 T 300,28 T 400,18; M 0,120 Q 50,110 100,90 T 200,60 T 300,30 T 400,20" 
                                        dur="8s" 
                                        repeatCount="indefinite" 
                                    />
                                </path>
                                <circle cx="400" r="4" fill="#cfabff" className="live-ping-dot">
                                    <animate 
                                        attributeName="cy" 
                                        values="20; 15; 25; 18; 20" 
                                        dur="8s" 
                                        repeatCount="indefinite" 
                                    />
                                </circle>
                                <circle cx="150" cy="110" r="1.5" fill="#4b7bff" className="particle p1" />
                                <circle cx="280" cy="80" r="2" fill="#cfabff" className="particle p2" />
                                <circle cx="350" cy="40" r="1.5" fill="#4b7bff" className="particle p3" />
                                <circle cx="100" cy="95" r="2" fill="#0ecb81" className="particle p4" />
                            </svg>
                        </div>

                        <div className="ticker-container">
                            <div className="ticker-scroll">
                                <span className="ticker-item"><span className="positive">▲</span> EURUSD +2.41% <span className="sep">|</span></span>
                                <span className="ticker-item"><span className="negative">▼</span> XAUUSD -0.87% <span className="sep">|</span></span>
                                <span className="ticker-item"><span className="positive">▲</span> BTCUSD +3.12% <span className="sep">|</span></span>
                                <span className="ticker-item"><span className="positive">▲</span> GBPJPY +1.55% <span className="sep">|</span></span>
                                
                                <span className="ticker-item"><span className="positive">▲</span> EURUSD +2.41% <span className="sep">|</span></span>
                                <span className="ticker-item"><span className="negative">▼</span> XAUUSD -0.87% <span className="sep">|</span></span>
                                <span className="ticker-item"><span className="positive">▲</span> BTCUSD +3.12% <span className="sep">|</span></span>
                                <span className="ticker-item"><span className="positive">▲</span> GBPJPY +1.55%</span>
                            </div>
                        </div>

                        <div className="hero-stats-grid">
                            <div className="stat-box">
                                <div className="stat-value">12%</div>
                                <div className="stat-label">Avg Monthly</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">78</div>
                                <div className="stat-label">Win Rate %</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">45.0K+</div>
                                <div className="stat-label">Trades</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Data Modal */}
            {isModalOpen && (
                <div className="live-data-modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="live-data-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>✕</button>
                        <h3>Live Market Engine Data</h3>
                        <p className="modal-subtitle">Real-time asset streaming directly from Binance Exchange.</p>
                        
                        {loading ? (
                            <div className="loading-spinner">Fetching Live Data...</div>
                        ) : (
                            <div className="market-data-grid">
                                {marketData.map((asset, idx) => {
                                    const symbol = asset.symbol.replace('USDT', '');
                                    const isPositive = parseFloat(asset.priceChangePercent) >= 0;
                                    return (
                                        <div className="market-asset-card" key={idx}>
                                            <div className="asset-header">
                                                <span className="asset-symbol">{symbol}/USDT</span>
                                                <span className={`asset-change ${isPositive ? 'positive' : 'negative'}`}>
                                                    {isPositive ? '+' : ''}{parseFloat(asset.priceChangePercent).toFixed(2)}%
                                                </span>
                                            </div>
                                            <div className="asset-price">${parseFloat(asset.lastPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}</div>
                                            <div className="asset-volume">Vol: {parseFloat(asset.volume).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
