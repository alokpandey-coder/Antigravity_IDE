import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import './RecentTrades.css';

const RecentTrades = ({ currentPrice }) => {
    const { currency } = useCurrency();
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        // Initial populate
        const initialTrades = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            price: currentPrice + (Math.random() - 0.5) * 50,
            amount: Math.random() * 0.5 + 0.01,
            type: Math.random() > 0.5 ? 'buy' : 'sell',
            time: new Date().toLocaleTimeString()
        }));
        setTrades(initialTrades);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTrades(prev => {
                const newTrade = {
                    id: Date.now(),
                    price: currentPrice + (Math.random() - 0.5) * 10,
                    amount: Math.random() * 0.5 + 0.01,
                    type: Math.random() > 0.5 ? 'buy' : 'sell',
                    time: new Date().toLocaleTimeString()
                };
                return [newTrade, ...prev.slice(0, 19)];
            });
        }, 800); // New trade every 800ms
        return () => clearInterval(interval);
    }, [currentPrice]);

    return (
        <div className="recent-trades-panel">
            <h3>Recent Trades</h3>
            <div className="trades-header">
                <span>Price</span>
                <span>Amount</span>
                <span>Time</span>
            </div>
            <div className="trades-list">
                {trades.map(trade => (
                    <div key={trade.id} className={`trade-row ${trade.type}`}>
                        <span className="price">{currency.symbol}{trade.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <span className="amount">{trade.amount.toFixed(4)}</span>
                        <span className="time">{trade.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentTrades;
