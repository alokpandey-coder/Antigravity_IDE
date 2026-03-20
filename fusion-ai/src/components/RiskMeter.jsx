import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import './RiskMeter.css';

const RiskMeter = () => {
    const { currency } = useCurrency();
    const [investment, setInvestment] = useState(1000);
    const [riskLevel, setRiskLevel] = useState('Medium');
    const [riskMode, setRiskMode] = useState('Conservative');
    const [duration, setDuration] = useState(12);

    const calculateRisk = (amount, mode) => {
        if (mode === 'Aggressive') return 'High';
        if (amount < 500) return 'Low';
        if (amount < 5000) return 'Medium';
        return 'High';
    };

    const handleInvestmentChange = (e) => {
        const val = parseInt(e.target.value, 10) || 0;
        setInvestment(val);
        setRiskLevel(calculateRisk(val, riskMode));
    };

    const handleModeChange = (mode) => {
        setRiskMode(mode);
        setRiskLevel(calculateRisk(investment, mode));
    };

    const getRiskColor = () => {
        switch (riskLevel) {
            case 'Low': return '#4caf50';
            case 'Medium': return '#ff9800';
            case 'High': return '#f44336';
            default: return '#fff';
        }
    };

    // Multipliers for simulation
    const getMultipliers = () => {
        return riskMode === 'Aggressive'
            ? { profit: 0.25, loss: 0.15 }
            : { profit: 0.10, loss: 0.05 };
    };

    const { profit, loss } = getMultipliers();

    return (
        <section className="risk-meter-section">
            <div className="risk-meter-container">
                <h3>Investment Risk Simulator</h3>
                <p>Understand potential outcomes before you invest.</p>

                <div className="controls-grid">
                    <div className="input-group">
                        <label>Investment Amount ({currency.symbol})</label>
                        <input
                            type="number"
                            value={investment}
                            onChange={handleInvestmentChange}
                            min="100"
                        />
                    </div>

                    <div className="input-group">
                        <label>Strategy Mode</label>
                        <div className="mode-toggles">
                            <button
                                className={`mode-btn ${riskMode === 'Conservative' ? 'active' : ''}`}
                                onClick={() => handleModeChange('Conservative')}
                            >Conservative</button>
                            <button
                                className={`mode-btn ${riskMode === 'Aggressive' ? 'active' : ''}`}
                                onClick={() => handleModeChange('Aggressive')}
                            >Aggressive</button>
                        </div>
                    </div>
                </div>

                <div className="input-group full-width">
                    <div className="duration-header">
                        <label>Investment Duration (Months)</label>
                        <input
                            type="number"
                            min="1"
                            max="60"
                            value={duration}
                            onChange={(e) => {
                                const val = e.target.value === '' ? '' : Math.max(1, Math.min(60, Number(e.target.value)));
                                setDuration(val);
                            }}
                            onBlur={(e) => {
                                if (duration === '' || duration < 1) setDuration(1);
                            }}
                            className="duration-input"
                        />
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="24"
                        value={duration || 1}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="duration-slider"
                    />
                </div>

                <div className="risk-display">
                    <div className="risk-gauge">
                        <div
                            className="risk-needle"
                            style={{
                                transform: `rotate(${riskLevel === 'Low' ? -45 : riskLevel === 'Medium' ? 0 : 45}deg)`,
                                borderColor: getRiskColor()
                            }}
                        ></div>
                    </div>
                    <div className="risk-text" style={{ color: getRiskColor() }}>
                        Risk Level: {riskLevel}
                    </div>
                </div>

                <div className="simulation-results">
                    <div className="result-item">
                        <span>Est. Profit ({duration} mo)</span>
                        <span className="value text-green">+{currency.symbol}{(investment * profit * (duration / 12)).toFixed(2)}</span>
                    </div>
                    <div className="result-item">
                        <span>Max Risk (Est.)</span>
                        <span className="value text-red">-{currency.symbol}{(investment * loss).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiskMeter;
