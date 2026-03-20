import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import './OrderBook.css';

const OrderBook = ({ currentPrice }) => {
    const { currency } = useCurrency();
    const [asks, setAsks] = useState([]);
    const [bids, setBids] = useState([]);

    // Initialize/Update Order Book
    useEffect(() => {
        const generateLevel = (basePrice, type, index) => {
            const spread = basePrice * 0.0005 * (index + 1);
            const price = type === 'ask' ? basePrice + spread : basePrice - spread;
            const size = Math.random() * 2 + 0.1;
            return { price, size, total: 0 }; // total calc later
        };

        const updateBook = () => {
            const newAsks = Array.from({ length: 8 }, (_, i) => generateLevel(currentPrice, 'ask', i)).reverse();
            const newBids = Array.from({ length: 8 }, (_, i) => generateLevel(currentPrice, 'bid', i));
            setAsks(newAsks);
            setBids(newBids);
        };

        updateBook();
        const interval = setInterval(updateBook, 2000); // Regenerate around the new price every 2s
        return () => clearInterval(interval);
    }, [currentPrice]);

    // Simulate tick updates (flashing)
    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly update one ask and one bid size
            setAsks(prev => prev.map(a => Math.random() > 0.8 ? { ...a, size: Math.random() * 2 + 0.1 } : a));
            setBids(prev => prev.map(b => Math.random() > 0.8 ? { ...b, size: Math.random() * 2 + 0.1 } : b));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const renderRow = (item, type) => (
        <div className={`book-row ${type}`} key={item.price}>
            <div className="book-bar" style={{ width: `${Math.min(item.size * 40, 100)}%` }}></div>
            <span className="price">{currency.symbol}{item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <span className="size">{item.size.toFixed(4)}</span>
        </div>
    );

    return (
        <div className="order-book-panel">
            <h3>Order Book</h3>
            <div className="book-header">
                <span>Price</span>
                <span>Size</span>
            </div>
            <div className="book-container">
                <div className="asks-list">
                    {asks.map(item => renderRow(item, 'ask'))}
                </div>
                <div className="spread-display">
                    Spread: {currency.symbol}{(asks.length && bids.length ? (asks[asks.length - 1].price - bids[0].price).toFixed(2) : '0.00')}
                </div>
                <div className="bids-list">
                    {bids.map(item => renderRow(item, 'bid'))}
                </div>
            </div>
        </div>
    );
};

export default OrderBook;
