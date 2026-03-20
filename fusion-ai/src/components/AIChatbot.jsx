import React, { useState, useRef, useEffect } from 'react';
import './AIChatbot.css';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi there! 👋 I am the Fusion AI assistant. How can I help you navigate today?' }
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleQuestionClick = (question, answer, link) => {
        setMessages(prev => [...prev, { type: 'user', text: question }]);
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: answer, link }]);
        }, 600);
    };

    const predefinedQuestions = [
        {
            q: "What is Fusion AI?",
            a: "Fusion AI is an advanced algorithmic trading platform powered by artificial intelligence. We analyze vast amounts of market data to execute trades with high precision.",
        },
        {
            q: "How do I start trading?",
            a: "To start trading, you can navigate to our Trading Dashboard. Make sure you check our pricing plans first!",
            link: { text: "Go to Dashboard", url: "#/trade" }
        },
        {
            q: "View Pricing Plans",
            a: "We offer simple and transparent pricing with no hidden fees. Visit our pricing page for more details.",
            link: { text: "See Pricing", url: "#/pricing" }
        }
    ];

    return (
        <div className={`chatbot-wrapper ${isOpen ? 'open' : ''}`}>
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="chatbot-title">
                            <span className="ai-badge">AI</span>
                            <h4>Fusion Assistant</h4>
                        </div>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                    </div>
                    
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}`}>
                                <p>{msg.text}</p>
                                {msg.link && (
                                    <a href={msg.link.url} className="chat-link-btn" onClick={() => setIsOpen(false)}>
                                        {msg.link.text}
                                    </a>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-options">
                        <p className="options-title">Suggested questions:</p>
                        <div className="options-container">
                            {predefinedQuestions.map((item, idx) => (
                                <button 
                                    key={idx} 
                                    className="option-btn"
                                    onClick={() => handleQuestionClick(item.q, item.a, item.link)}
                                >
                                    {item.q}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
            <button 
                className={`chatbot-toggle-btn ${isOpen ? 'hidden' : ''}`} 
                onClick={() => setIsOpen(true)}
            >
                💬 Chat
            </button>
        </div>
    );
};

export default AIChatbot;
