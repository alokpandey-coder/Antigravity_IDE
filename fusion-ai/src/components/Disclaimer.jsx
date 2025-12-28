import React from 'react';
import './Disclaimer.css';

const Disclaimer = () => {
    return (
        <section className="disclaimer-section">
            <div className="disclaimer-content">
                <h3>Disclaimer</h3>
                <p>We are a software provider offering tools for educational purposes to help users become independent traders. We are not a forex broker and do not handle client funds. We disclaim any responsibility for misuse of our products in illegal activities, which are prohibited by law.</p>

                <h3>High-Risk Investment</h3>
                <p>Forex trading involves risk and may not be suitable for everyone. Only invest what you can afford to lose. FusionAI provides general information, not financial advice. For personalized guidance, consult a licensed financial advisor.</p>
            </div>
        </section>
    );
};

export default Disclaimer;
