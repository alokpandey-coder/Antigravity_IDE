import React from 'react';
import './Offerings.css';

const Offerings = () => {
    return (
        <section className="offerings" id="what-we-offer">
            <div className="offering-header">
                <h2>What We Offer</h2>
                <p>Comprehensive solutions designed for the modern trader.</p>
            </div>

            <div className="offering-content">
                <div className="offering-block">
                    <div className="offering-text">
                        <h3>Algo Trading</h3>
                        <p>Algo trading is automated stock trading by computers using pre-set rules like price or timing. It’s fast, emotion-free, and follows strategies like trend following or arbitrage to seek profits.</p>
                    </div>
                </div>

                <div className="offering-block reverse">
                    <div className="offering-text">
                        <h3>Automated Trading Algorithms</h3>
                        <p>Automated trading algorithms analyze markets and execute strategies for you — enabling efficient trading, risk management, and smarter decisions without manual effort.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offerings;
