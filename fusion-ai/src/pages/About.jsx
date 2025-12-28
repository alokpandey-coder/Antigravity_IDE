import React from 'react';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
    return (
        <>
            <div className="about-page">
                <header className="about-hero">
                    <h1>About FusionAI</h1>
                    <p>Revolutionizing the future of automated trading.</p>
                </header>

                <section className="about-content">
                    <div className="about-section">
                        <h2>Our Mission</h2>
                        <p>At FusionAI, our mission is to democratize institutional-grade trading technology. We believe that financial freedom should be accessible to everyone, regardless of their technical expertise or time constraints. By leveraging cutting-edge Artificial Intelligence, we empower individuals to compete in the global markets with the same tools used by top hedge funds.</p>
                    </div>

                    <div className="about-section">
                        <h2>Who We Are</h2>
                        <p>FusionAI is a team of expert traders, data scientists, and engineers united by a single goal: to solve the complexity of the financial markets. We understand the challenges of manual trading—emotional bias, fatigue, and the impossibility of monitoring 24/7 markets. Our solution removes these barriers.</p>
                    </div>

                    <div className="about-section">
                        <h2>Our Technology</h2>
                        <p>Our proprietary algorithms are the result of years of backtesting and real-market refinement. We utilize machine learning models that adapt to changing market conditions, ensuring that your portfolio is always positioned for optimal growth while maintaining strict risk management protocols.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;
