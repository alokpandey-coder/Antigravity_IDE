import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import TradingChart from '../components/TradingChart';
import AIAssistant from '../components/AIAssistant';
import OrderBook from '../components/OrderBook';
import RecentTrades from '../components/RecentTrades';
import ToastResponse from '../components/ToastResponse';
import './TradingDashboard.css';

const TradingDashboard = () => {
    const { currency } = useCurrency();
    const [selectedAsset, setSelectedAsset] = useState('BTC/USD');
    const [currentPrice, setCurrentPrice] = useState(50000);
    const [chartType, setChartType] = useState('candle');
    const [toasts, setToasts] = useState([]);

    // Account State - Initialize from LocalStorage if available
    const [balance, setBalance] = useState(() => {
        const saved = localStorage.getItem('tradeai_balance');
        return saved ? parseFloat(saved) : 100000;
    });
    const [positions, setPositions] = useState(() => {
        const saved = localStorage.getItem('tradeai_positions');
        return saved ? JSON.parse(saved) : [];
    });
    const [tradeHistory, setTradeHistory] = useState(() => {
        const saved = localStorage.getItem('tradeai_history');
        return saved ? JSON.parse(saved) : [];
    });

    // UI State
    const [activeTab, setActiveTab] = useState('positions'); // 'positions' | 'history'

    // Order State
    const [orderAmount, setOrderAmount] = useState(1);
    const [leverage, setLeverage] = useState(1);
    const [takeProfit, setTakeProfit] = useState('');
    const [stopLoss, setStopLoss] = useState('');

    // Generate Mock Assets (Top 50)
    const generateAssets = () => {
        const topCrypto = ['BTC/USD', 'ETH/USD', 'SOL/USD', 'XRP/USD', 'ADA/USD', 'DOGE/USD', 'DOT/USD', 'AVAX/USD'];
        const topStocks = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'META', 'NFLX', 'AMD', 'INTC', 'BABA', 'TCEHY', 'TSM', 'JPM', 'V', 'WMT', 'PG', 'XOM', 'JNJ', 'MA', 'HD', 'CVX', 'MRK', 'ABBV', 'PEP', 'KO', 'LLY', 'BAC', 'PFE', 'T', 'DIS', 'CSCO', 'VZ', 'ADBE', 'CRM', 'NKE', 'TMus', 'CMCSA', 'ORCL', 'ABT', 'WFC'];

        const allSymbols = [...topCrypto, ...topStocks];
        return allSymbols.map(sym => ({
            symbol: sym,
            name: sym.includes('/') ? `${sym.split('/')[0]} crypto` : `${sym} Corp`,
            change: (Math.random() * 10 - 5).toFixed(2) // Random % change
        }));
    };

    const [assets] = useState(generateAssets());

    // Persistence Effect
    useEffect(() => {
        localStorage.setItem('tradeai_balance', balance);
        localStorage.setItem('tradeai_positions', JSON.stringify(positions));
        localStorage.setItem('tradeai_history', JSON.stringify(tradeHistory));
    }, [balance, positions, tradeHistory]);

    const addToast = (text, type = 'info') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, text, type }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
    };

    const handlePriceUpdate = (price) => {
        setCurrentPrice(price);
    };

    const handleTrade = (action) => {
        const cost = (currentPrice * orderAmount) / leverage;
        if (action === 'BUY') {
            if (balance >= cost) {
                setBalance(prev => prev - cost);
                setPositions(prev => [...prev, {
                    id: Date.now(),
                    symbol: selectedAsset,
                    type: 'LONG',
                    entry: currentPrice,
                    amount: orderAmount,
                    leverage: leverage,
                    sl: stopLoss,
                    tp: takeProfit
                }]);
                addToast(`Bought ${orderAmount} ${selectedAsset} (${leverage}x)`, 'success');
            } else {
                addToast("Insufficient funds", 'error');
            }
        } else {
            // SHORT Logic
            setBalance(prev => prev + cost); // Simplified Margin Logic
            setPositions(prev => [...prev, {
                id: Date.now(),
                symbol: selectedAsset,
                type: 'SHORT',
                entry: currentPrice,
                amount: orderAmount,
                leverage: leverage,
                sl: stopLoss,
                tp: takeProfit
            }]);
            addToast(`Sold (Short) ${orderAmount} ${selectedAsset} (${leverage}x)`, 'success');
        }
    };

    const handleClosePosition = (pos) => {
        const exitPrice = currentPrice;
        let pnl = 0;

        if (pos.type === 'LONG') {
            pnl = (exitPrice - pos.entry) * pos.amount;
            setBalance(prev => prev + (pos.amount * exitPrice));
        } else { // SHORT
            pnl = (pos.entry - exitPrice) * pos.amount;
            setBalance(prev => prev - (pos.amount * exitPrice));
        }

        // Add to history
        const record = {
            ...pos,
            exit: exitPrice,
            pnl: pnl,
            closedAt: new Date().toLocaleString()
        };
        setTradeHistory(prev => [record, ...prev]);

        // Remove from positions
        setPositions(prev => prev.filter(p => p.id !== pos.id));

        addToast(`Closed ${pos.symbol} (${pos.type}) P&L: ${currency.symbol}${pnl.toFixed(2)}`, pnl >= 0 ? 'success' : 'error');
    };

    const calculatePnL = (pos) => {
        if (pos.type === 'LONG') {
            return (currentPrice - pos.entry) * pos.amount;
        } else {
            return (pos.entry - currentPrice) * pos.amount;
        }
    };

    const totalPnL = positions.reduce((acc, pos) => {
        return pos.symbol === selectedAsset ? acc + calculatePnL(pos) : acc;
    }, 0);

    return (
        <div className="trading-dashboard">
            <ToastResponse messages={toasts} />

            <div className="dashboard-header">
                <div className="account-info">
                    <span className="label">Balance</span>
                    <span className="value">{currency.symbol}{balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="account-info">
                    <span className="label">Unrealized P&L</span>
                    <span className={`value ${totalPnL >= 0 ? 'profit' : 'loss'}`}>
                        {totalPnL >= 0 ? '+' : ''}{currency.symbol}{totalPnL.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </span>
                </div>
                <div className="header-controls">
                    <div className="chart-toggle">
                        <button className={chartType === 'line' ? 'active' : ''} onClick={() => setChartType('line')}>Line</button>
                        <button className={chartType === 'candle' ? 'active' : ''} onClick={() => setChartType('candle')}>Candles</button>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* 1. Market Watch */}
                <div className="panel market-watch">
                    <h3>Market Watch</h3>
                    <div className="asset-list">
                        {assets.map(asset => (
                            <div
                                key={asset.symbol}
                                className={`asset-item ${selectedAsset === asset.symbol ? 'active' : ''}`}
                                onClick={() => setSelectedAsset(asset.symbol)}
                            >
                                <div className="asset-row-top">
                                    <span className="asset-name">{asset.symbol}</span>
                                    <span className="asset-change text-green">+0.4%</span>
                                </div>
                                <span className="asset-desc">{asset.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Chart Area */}
                <div className="panel chart-panel">
                    <div className="chart-header">
                        <h2>{selectedAsset} <span className="live-price">{currency.symbol}{currentPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></h2>
                    </div>

                    <div className="chart-container-main">
                        <TradingChart symbol={selectedAsset} onPriceUpdate={handlePriceUpdate} chartType={chartType} />
                    </div>

                    <div className="positions-panel">
                        <div className="panel-tabs">
                            <button className={activeTab === 'positions' ? 'active' : ''} onClick={() => setActiveTab('positions')}>Open Positions</button>
                            <button className={activeTab === 'history' ? 'active' : ''} onClick={() => setActiveTab('history')}>Trade History</button>
                        </div>

                        {activeTab === 'positions' ? (
                            <div className="positions-list">
                                {positions.length === 0 ? (
                                    <p className="no-positions">No open positions.</p>
                                ) : (
                                    positions.map(pos => (
                                        <div key={pos.id} className="position-row">
                                            <span className="pos-asset">{pos.symbol}</span>
                                            <span className={`pos-type ${pos.type}`}>{pos.type}</span>
                                            <span>Entry: {pos.entry.toFixed(2)}</span>
                                            <span>Amt: {pos.amount}</span>
                                            <span className={calculatePnL(pos) >= 0 ? 'profit' : 'loss'}>
                                                {calculatePnL(pos) >= 0 ? '+' : ''}{calculatePnL(pos).toFixed(2)}
                                            </span>
                                            <button className="close-btn" onClick={() => handleClosePosition(pos)}>Close</button>
                                        </div>
                                    ))
                                )}
                            </div>
                        ) : (
                            <div className="positions-list history-list">
                                {tradeHistory.length === 0 ? (
                                    <p className="no-positions">No trade history.</p>
                                ) : (
                                    tradeHistory.map(record => (
                                        <div key={record.id} className="position-row history-row">
                                            <span className="pos-asset">{record.symbol}</span>
                                            <span className={`pos-type ${record.type}`}>{record.type}</span>
                                            <span>Entry: {record.entry.toFixed(2)}</span>
                                            <span>Exit: {record.exit.toFixed(2)}</span>
                                            <span className={record.pnl >= 0 ? 'profit' : 'loss'}>
                                                {record.pnl >= 0 ? '+' : ''}{currency.symbol}{record.pnl.toFixed(2)}
                                            </span>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* 3. Order Book & Trades (Stacked) */}
                <div className="panel data-panel">
                    <div className="half-panel top">
                        <OrderBook currentPrice={currentPrice} />
                    </div>
                    <div className="half-panel bottom">
                        <RecentTrades currentPrice={currentPrice} />
                    </div>
                </div>

                {/* 4. Order Entry (Full Height) */}
                <div className="panel right-panel">
                    <div className="order-entry full-height">
                        <h3>Order Entry</h3>
                        <div className="entry-grid">

                            {/* Available Balance */}
                            <div className="input-group">
                                <label>Available Balance</label>
                                <div className="val highlight">{currency.symbol}{balance.toLocaleString()}</div>
                            </div>

                            {/* Amount Input */}
                            <div className="input-group">
                                <label>Amount ({selectedAsset.split('/')[0]})</label>
                                <input
                                    type="number"
                                    value={orderAmount}
                                    onChange={(e) => setOrderAmount(parseFloat(e.target.value) || 0)}
                                    min="0.01"
                                />
                            </div>

                            {/* Leverage Slider */}
                            <div className="input-group">
                                <label>Leverage: {leverage}x</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={leverage}
                                    onChange={(e) => setLeverage(parseInt(e.target.value))}
                                    className="leverage-slider"
                                />
                                <div className="leverage-marks">
                                    <span>1x</span>
                                    <span>25x</span>
                                    <span>50x</span>
                                </div>
                            </div>

                            {/* TP / SL Inputs */}
                            <div className="row-inputs">
                                <div className="input-group">
                                    <label>Take Profit ($)</label>
                                    <input
                                        type="number"
                                        placeholder="Optional"
                                        value={takeProfit}
                                        onChange={(e) => setTakeProfit(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Stop Loss ($)</label>
                                    <input
                                        type="number"
                                        placeholder="Optional"
                                        value={stopLoss}
                                        onChange={(e) => setStopLoss(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="est-cost">
                                Margin Required: {currency.symbol}{((currentPrice * orderAmount) / leverage).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                            </div>

                            <div className="order-buttons">
                                <button className="trade-btn buy" onClick={() => handleTrade('BUY')}>BUY / LONG</button>
                                <button className="trade-btn sell" onClick={() => handleTrade('SELL')}>SELL / SHORT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating AI Assistant (MetaAI Style) */}
            <AIAssistant currentPrice={currentPrice} symbol={selectedAsset} />
        </div>
    );
};

export default TradingDashboard;
