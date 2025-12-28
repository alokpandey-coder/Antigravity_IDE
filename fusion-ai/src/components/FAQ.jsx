import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is algorithmic trading?",
            answer: "Algorithmic trading uses computer programs to automatically execute trades based on set criteria like price, volume, or market conditions."
        },
        {
            question: "How do FusionAI’s trading algorithms work?",
            answer: "Our trading algos analyze real-time market data and execute trades instantly based on pre-set rules, ensuring speed and precision in the forex market."
        },
        {
            question: "Can I customize the trading algorithms?",
            answer: "Yes, FusionAI offers customizable trading algorithms tailored to your strategy, risk tolerance, and financial goals."
        },
        {
            question: "Is algorithmic trading suitable for beginners?",
            answer: "Algorithmic trading is powerful, but beginners should understand forex basics. Our user-friendly interface and educational tools make it easy for all skill levels."
        },
        {
            question: "How does FusionAI manage risk?",
            answer: "Our bots feature advanced risk management tools like stop-loss and take-profit to help protect your investments and limit losses."
        },
        {
            question: "What markets can I trade?",
            answer: "Our algorithms are built for the forex market but can be adapted for other financial markets based on your trading preferences."
        },
        {
            question: "Do I need to monitor the algos continuously?",
            answer: "No, our trading bots operate autonomously, monitoring the market 24/7 and executing trades based on your predefined rules."
        },
        {
            question: "How do I track performance?",
            answer: "FusionAI offers performance analytics tools to review trade history, track real-time results, and refine your strategies as needed."
        }
    ];

    return (
        <section className="faq-section" id="support">
            <h2 className="section-title">We’re Here to Support You</h2>
            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="faq-question">
                            <h4>{item.question}</h4>
                            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
