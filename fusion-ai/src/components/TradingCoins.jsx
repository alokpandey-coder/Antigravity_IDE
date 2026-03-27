import React from 'react';
import './TradingCoins.css';

const coinsData = [
    { id: 'BTC', name: 'Bitcoin', price: '65,243.10', change: '+2.45', isUp: true, color: '#f7931a', chartPoints: '0,40 10,35 20,38 30,25 40,28 50,15 60,20 70,5 80,10 90,0' },
    { id: 'ETH', name: 'Ethereum', price: '3,452.80', change: '+1.82', isUp: true, color: '#627eea', chartPoints: '0,40 10,38 20,30 30,35 40,20 50,25 60,15 70,18 80,5 90,0' },
    { id: 'SOL', name: 'Solana', price: '145.30', change: '-4.12', isUp: false, color: '#14f195', chartPoints: '0,0 10,5 20,3 30,15 40,12 50,25 60,20 70,35 80,30 90,40' },
    { id: 'XRP', name: 'Ripple', price: '0.62', change: '+0.54', isUp: true, color: '#23292f', chartPoints: '0,35 15,30 30,32 45,20 60,25 75,10 90,5' },
    { id: 'ADA', name: 'Cardano', price: '0.45', change: '-1.24', isUp: false, color: '#0033ad', chartPoints: '0,10 20,15 40,12 60,25 80,20 90,35' },
];

const TradingCoins = () => {
    return (
        <div className="trading-coins-section">
            <div className="trading-coins-grid">
                {coinsData.map(coin => (
                    <div className="coin-card" key={coin.id}>
                        <div className="coin-header">
                            <div className="coin-icon" style={{ backgroundColor: coin.color }}>
                                {coin.id.substring(0, 1)}
                            </div>
                            <div className="coin-info">
                                <span className="coin-symbol">{coin.id}/USDT</span>
                                <span className="coin-name">{coin.name}</span>
                            </div>
                        </div>
                        <div className="coin-price-row">
                            <div className="coin-price">${coin.price}</div>
                            <div className={`coin-change ${coin.isUp ? 'up' : 'down'}`}>
                                {coin.change}%
                            </div>
                        </div>
                        <div className="coin-chart">
                            <svg viewBox="0 0 90 40" preserveAspectRatio="none">
                                <path
                                    d={`M ${coin.chartPoints}`}
                                    fill="none"
                                    stroke={coin.isUp ? '#0ecb81' : '#e84949'}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d={`M 0,40 L ${coin.chartPoints} L 90,40 Z`}
                                    fill={coin.isUp ? 'url(#green-gradient)' : 'url(#red-gradient)'}
                                    opacity="0.2"
                                />
                                <defs>
                                    <linearGradient id="green-gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#0ecb81" stopOpacity="1"/>
                                        <stop offset="100%" stopColor="#0ecb81" stopOpacity="0"/>
                                    </linearGradient>
                                    <linearGradient id="red-gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#e84949" stopOpacity="1"/>
                                        <stop offset="100%" stopColor="#e84949" stopOpacity="0"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TradingCoins;
