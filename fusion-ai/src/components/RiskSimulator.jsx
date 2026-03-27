import React, { useState, useEffect, useRef } from 'react';
import './RiskSimulator.css';

// Hook for animating numbers
function useAnimatedNumber(value, duration = 500) {
    const [displayValue, setDisplayValue] = useState(value);
    
    useEffect(() => {
        let startTime;
        const startValue = displayValue;
        const endValue = value;
        
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = startValue + (endValue - startValue) * easeProgress;
            
            setDisplayValue(current);
            
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setDisplayValue(endValue);
            }
        };
        requestAnimationFrame(step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, duration]);
    
    return displayValue;
}

const RiskSimulator = () => {
    const [amount, setAmount] = useState(10000);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [riskLevel, setRiskLevel] = useState('Medium');
    const [assetType, setAssetType] = useState('Forex (Pairs)');
    
    // Currency Exchange State
    const [rates, setRates] = useState(null);
    const [fromCr, setFromCr] = useState('USD');
    const [toCr, setToCr] = useState('EUR');
    const [exAmount, setExAmount] = useState(1000);

    useEffect(() => {
        fetch('https://open.er-api.com/v6/latest/USD')
            .then(res => res.json())
            .then(data => setRates(data.rates))
            .catch(err => console.error('Exchange rate fetch failed', err));
    }, []);

    const calculateProjections = () => {
        let baseReturn, maxDrawdown;

        if (riskLevel === 'Low') {
            baseReturn = 5;
            maxDrawdown = 2;
        } else if (riskLevel === 'Medium') {
            baseReturn = 12;
            maxDrawdown = 6;
        } else {
            baseReturn = 25;
            maxDrawdown = 15;
        }

        if (assetType === 'Crypto') {
            baseReturn *= 1.5;
            maxDrawdown *= 1.8;
        } else if (assetType === 'Stocks') {
            baseReturn *= 0.8;
            maxDrawdown *= 0.7;
        } else if (assetType === 'Commodities') {
            baseReturn *= 0.9;
            maxDrawdown *= 0.8;
        }

        return {
            rate: baseReturn,
            drawdown: maxDrawdown,
            gainVal: (amount * baseReturn) / 100,
            lossVal: (amount * maxDrawdown) / 100
        };
    };

    const projections = calculateProjections();
    
    // Animated Values
    const animRate = useAnimatedNumber(projections.rate);
    const animGain = useAnimatedNumber(projections.gainVal);
    const animDrawdown = useAnimatedNumber(projections.drawdown);
    const animLoss = useAnimatedNumber(projections.lossVal);

    const getCurrencySymbol = (code) => {
        switch(code) {
            case 'USD': case 'AUD': case 'CAD': return '$';
            case 'EUR': return '€';
            case 'GBP': return '£';
            case 'INR': return '₹';
            case 'JPY': return '¥';
            case 'CHF': return 'CHF';
            default: return '$';
        }
    };

    const currencySymbol = getCurrencySymbol(baseCurrency);

    const getConverted = () => {
        if (!rates || !rates[fromCr] || !rates[toCr]) return '0.00';
        const inUSD = exAmount / rates[fromCr];
        return (inUSD * rates[toCr]).toFixed(2);
    };

    const getRiskColor = () => {
        if (riskLevel === 'Low') return '#00D897';
        if (riskLevel === 'Medium') return '#F97316';
        return '#FF4D6D';
    };

    // Gauge calculation setup
    // 180 degree semi circle map: 
    // Low = 45deg, Medium = 90deg, High = 135deg (relative to 0 at left side)
    const getGaugeAngle = () => {
        if (riskLevel === 'Low') return -45; // roughly 45 deg from left
        if (riskLevel === 'Medium') return 0; // top center
        return 45; // roughly 135 deg from left
    };

    return (
        <section className="premium-risk-section" id="risk-simulator">
            <div className="premium-bg-particles"></div>
            <div className="simulator-container-new">
                
                <div className="simulator-header-new">
                    <div className="mini-label-row">
                        <span className="h-line"></span>
                        <span className="mini-label-text">FINANCIAL MODELING</span>
                        <span className="h-line"></span>
                    </div>
                    <h2 className="premium-title">
                        Investment <span className="premium-gradient-text">Risk Simulator</span>
                    </h2>
                    <p className="premium-subtitle">
                        Use our advanced fintech model to project potential gains and drawdown limits based on your capital and risk appetite.
                    </p>
                </div>

                <div className="layout-two-col">
                    
                    {/* LEFT PANEL - CONFIGURATION */}
                    <div className="glass-panel config-panel">
                        <h3 className="panel-heading">Configuration</h3>
                        
                        <div className="premium-form-group">
                            <div className="flex-row-label">
                                <label>Initial Investment</label>
                                <div className="dark-dropdown-wrapper">
                                    <select 
                                        value={baseCurrency} 
                                        onChange={(e) => setBaseCurrency(e.target.value)}
                                        className="dark-select currency-select"
                                    >
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                        <option value="INR">INR</option>
                                        <option value="AUD">AUD</option>
                                        <option value="CAD">CAD</option>
                                        <option value="CHF">CHF</option>
                                        <option value="JPY">JPY</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-with-symbol">
                                <span className="input-symbol">{currencySymbol}</span>
                                <input 
                                    className="premium-input"
                                    type="number" 
                                    value={amount} 
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    min="1"
                                />
                            </div>
                        </div>

                        <div className="premium-form-group">
                            <label>Risk Profile</label>
                            <div className="premium-pills-row">
                                {['Low', 'Medium', 'High'].map(level => {
                                    const isActive = riskLevel === level;
                                    const levelClass = level.toLowerCase();
                                    return (
                                        <button 
                                            key={level}
                                            className={`premium-pill ${isActive ? 'active ' + levelClass : ''}`}
                                            onClick={() => setRiskLevel(level)}
                                        >
                                            {level}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="premium-form-group mb-0">
                            <label>Asset Class</label>
                            <div className="dark-dropdown-wrapper full-width-dd">
                                <select 
                                    className="dark-select premium-select" 
                                    value={assetType}
                                    onChange={(e) => setAssetType(e.target.value)}
                                >
                                    <option value="Forex (Pairs)">Forex (Pairs)</option>
                                    <option value="Crypto">Crypto</option>
                                    <option value="Stocks">Stocks</option>
                                    <option value="Commodities">Commodities</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL - RESULTS */}
                    <div className="glass-panel results-panel">
                        <div className="svg-gauge-wrapper">
                            <svg className="svg-arc-gauge" viewBox="0 0 200 120">
                                {/* Background Arc */}
                                <path 
                                    d="M 20 100 A 80 80 0 0 1 180 100" 
                                    fill="none" 
                                    stroke="rgba(255,255,255,0.1)" 
                                    strokeWidth="12" 
                                    strokeLinecap="round"
                                />
                                {/* Colored Foreground Arc */}
                                <path 
                                    d="M 20 100 A 80 80 0 0 1 180 100" 
                                    fill="none" 
                                    stroke={getRiskColor()} 
                                    strokeWidth="12" 
                                    strokeLinecap="round"
                                    className="gauge-arc-anim"
                                    style={{
                                        // dash offset magic to fill percentage
                                        // Length of semi-circle is Pi * r = 3.14 * 80 = 251.2
                                        strokeDasharray: '251.2',
                                        strokeDashoffset: riskLevel === 'Low' ? '167' /* 1/3 filled */ : riskLevel === 'Medium' ? '125.6' /* 1/2 filled */ : '50' /* Mostly filled */,
                                        transition: 'stroke 0.5s ease-in-out, stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                />
                                {/* Tick marks */}
                                <line x1="100" y1="20" x2="100" y2="40" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                                <line x1="35" y1="53" x2="50" y2="65" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                                <line x1="165" y1="53" x2="150" y2="65" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                                
                                {/* Animated Needle */}
                                <g className="animated-needle-group" style={{ transform: `rotate(${getGaugeAngle()}deg)`, transformOrigin: '100px 100px', transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                                    <line x1="100" y1="100" x2="100" y2="25" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                                    <circle cx="100" cy="100" r="6" fill="#ffffff" />
                                </g>
                            </svg>
                            <div className="gauge-label-glow" style={{ color: getRiskColor(), textShadow: `0 0 15px ${getRiskColor()}` }}>
                                {riskLevel} Risk Exposure
                            </div>
                        </div>

                        <div className="results-metrics-row">
                            <div className="metric-box box-green">
                                <div className="metric-title">PROJECTED MONTHLY GAIN</div>
                                <div className="metric-pct">+{animRate.toFixed(1)}%</div>
                                <div className="metric-val">+{currencySymbol}{animGain.toFixed(2)}</div>
                            </div>
                            <div className="metric-box box-red">
                                <div className="metric-title">MAXIMUM DRAWDOWN</div>
                                <div className="metric-pct">-{animDrawdown.toFixed(1)}%</div>
                                <div className="metric-val">-{currencySymbol}{animLoss.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM PANEL - EXCHANGE */}
                <div className="glass-panel exchange-panel">
                    <div className="exchange-header">
                        <h4>Live Currency Exchange</h4>
                        <div className="live-status-badge">
                            <span className="pulse-dot-green"></span> Live Rates
                        </div>
                    </div>
                    
                    <div className="exchange-flex-row">
                        <div className="ex-input-wrap">
                            <input 
                                type="number" 
                                className="premium-input ex-amount" 
                                value={exAmount} 
                                onChange={(e) => setExAmount(Number(e.target.value))} 
                                min="1"
                            />
                            <div className="dark-dropdown-wrapper inline-ex">
                                <select 
                                    className="dark-select" 
                                    value={fromCr} 
                                    onChange={(e) => setFromCr(e.target.value)}
                                >
                                    {['USD', 'EUR', 'GBP', 'INR', 'JPY', 'AUD', 'CAD', 'CHF'].map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="ex-arrow-spacer">
                            <span className="arr-svg">➔</span>
                        </div>

                        <div className="ex-input-wrap output-wrap">
                            <div className="premium-input converted-text">{getConverted()}</div>
                            <div className="dark-dropdown-wrapper inline-ex">
                                <select 
                                    className="dark-select" 
                                    value={toCr} 
                                    onChange={(e) => setToCr(e.target.value)}
                                >
                                    {['USD', 'EUR', 'GBP', 'INR', 'JPY', 'AUD', 'CAD', 'CHF'].map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RiskSimulator;
