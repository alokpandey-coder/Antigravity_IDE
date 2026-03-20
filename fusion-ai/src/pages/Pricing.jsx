import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import './Pricing.css';

const Pricing = ({ section }) => {
    const { currency } = useCurrency();

    const renderContent = () => {
        switch (section) {
            case 'commissions':
                return (
                    <div className="pricing-content">
                        <h2>Commissions</h2>
                        <p className="pricing-subtitle">Low commissions on stocks, options, futures, currencies and more.</p>

                        <div className="pricing-grid">
                            <div className="pricing-card">
                                <h3>Stocks & ETFs</h3>
                                <div className="price-row">
                                    <span>United States</span>
                                    <span className="price-val">{currency.symbol}0.005 / share</span>
                                </div>
                                <div className="price-row">
                                    <span>Europe</span>
                                    <span className="price-val">0.05% of trade value</span>
                                </div>
                                <p className="price-note">Min: {currency.symbol}1.00 | Max: 1.0%</p>
                            </div>

                            <div className="pricing-card">
                                <h3>Options</h3>
                                <div className="price-row">
                                    <span>Per Contract</span>
                                    <span className="price-val">{currency.symbol}0.65</span>
                                </div>
                                <p className="price-note">No minimums. Volume discounts available.</p>
                            </div>

                            <div className="pricing-card">
                                <h3>Futures</h3>
                                <div className="price-row">
                                    <span>Per Contract</span>
                                    <span className="price-val">{currency.symbol}0.85</span>
                                </div>
                                <p className="price-note">Includes exchange and regulatory fees.</p>
                            </div>
                        </div>
                    </div>
                );
            case 'margin-rates':
                return (
                    <div className="pricing-content">
                        <h2>Margin Rates</h2>
                        <p className="pricing-subtitle">Lowest margin rates in the industry.</p>
                        <div className="table-container">
                            <table className="pricing-table">
                                <thead>
                                    <tr>
                                        <th>Tier ({currency.code})</th>
                                        <th>Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0 - 100,000</td>
                                        <td>6.83%</td>
                                    </tr>
                                    <tr>
                                        <td>100,000 - 1,000,000</td>
                                        <td>6.33%</td>
                                    </tr>
                                    <tr>
                                        <td>1,000,000 - 3,000,000</td>
                                        <td>6.08%</td>
                                    </tr>
                                    <tr>
                                        <td>&gt; 3,000,000</td>
                                        <td>5.83%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'interest-rates':
                return (
                    <div className="pricing-content">
                        <h2>Interest Rates</h2>
                        <p className="pricing-subtitle">Earn high interest on your idle cash balances.</p>
                        <div className="highlight-box">
                            <h3>Earn up to 4.83% APY</h3>
                            <p>On instantly available cash balances.</p>
                        </div>
                    </div>
                );
            case 'short-sale-cost':
                return (
                    <div className="pricing-content">
                        <h2>Short Sale Cost</h2>
                        <p className="pricing-subtitle">Transparent stock borrow fees.</p>
                        <p>We provide real-time indicative borrow rates to help you understand the cost of shorting.</p>
                    </div>
                );
            case 'research-news':
                return (
                    <div className="pricing-content">
                        <h2>Research and News</h2>
                        <p className="pricing-subtitle">Institutional-grade research and real-time news.</p>
                        <ul className="feature-list">
                            <li>Real-time News Feed</li>
                            <li>Advanced Market Scanners</li>
                            <li>Institutional Analyst Research</li>
                        </ul>
                    </div>
                );
            case 'market-data':
                return (
                    <div className="pricing-content">
                        <h2>Market Data Pricing</h2>
                        <p className="pricing-subtitle">Direct market data costs passed to you with no markup.</p>
                    </div>
                );
            case 'stock-yield':
                return (
                    <div className="pricing-content">
                        <h2>Stock Yield Enhancement</h2>
                        <p className="pricing-subtitle">Earn extra income on fully-paid shares of stock.</p>
                        <p>We borrow your shares to lend to traders who want to short and split the interest with you 50/50.</p>
                    </div>
                );
            case 'other-fees':
                return (
                    <div className="pricing-content">
                        <h2>Other Fees</h2>
                        <p className="pricing-subtitle">No hidden fees.</p>
                        <div className="pricing-grid">
                            <div className="pricing-card">
                                <h3>Inactivity Fee</h3>
                                <span className="price-val">{currency.symbol}0.00</span>
                            </div>
                            <div className="pricing-card">
                                <h3>Account Maintenance</h3>
                                <span className="price-val">{currency.symbol}0.00</span>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <div>Select a pricing category</div>;
        }
    };

    return (
        <div className="pricing-page">
            <div className="pricing-sidebar">
                <h3>Pricing</h3>
                <nav className="pricing-nav">
                    <a href="#/pricing/commissions" className={section === 'commissions' ? 'active' : ''}>Commissions</a>
                    <a href="#/pricing/margin-rates" className={section === 'margin-rates' ? 'active' : ''}>Margin Rates</a>
                    <a href="#/pricing/interest-rates" className={section === 'interest-rates' ? 'active' : ''}>Interest Rates</a>
                    <a href="#/pricing/short-sale-cost" className={section === 'short-sale-cost' ? 'active' : ''}>Short Sale Cost</a>
                    <a href="#/pricing/research-news" className={section === 'research-news' ? 'active' : ''}>Research and News</a>
                    <a href="#/pricing/market-data" className={section === 'market-data' ? 'active' : ''}>Market Data Pricing</a>
                    <a href="#/pricing/stock-yield" className={section === 'stock-yield' ? 'active' : ''}>Stock Yield Enhancement</a>
                    <a href="#/pricing/other-fees" className={section === 'other-fees' ? 'active' : ''}>Other Fees</a>
                </nav>
            </div>
            <div className="pricing-main-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Pricing;
