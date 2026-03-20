import React, { useState, useEffect, useRef } from 'react';
import './AIAssistant.css';

const AIAssistant = ({ currentPrice, symbol }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'ai', text: `Hello! I am your AI Trading Assistant. I'm tracking ${symbol} at $${currentPrice.toFixed(2)}. Ask me anything about the market!` }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    // Initial greeting when symbol changes
    useEffect(() => {
        if (isOpen) {
            setMessages(prev => [
                ...prev,
                { id: Date.now(), type: 'ai', text: `Switching analysis to ${symbol}. Volatility is normal.` }
            ]);
        }
    }, [symbol]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userText = inputValue;
        setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: userText }]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI Processing
        setTimeout(() => {
            const response = generateAIResponse(userText, symbol, currentPrice);
            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'ai', text: response }]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    const generateAIResponse = (query, sym, price) => {
        const lowerQuery = query.toLowerCase();

        if (lowerQuery.includes('buy') || lowerQuery.includes('long')) {
            const sentiment = Math.random() > 0.4 ? 'BULLISH' : 'NEUTRAL';
            return sentiment === 'BULLISH'
                ? `Strong BUY signal detected for ${sym}. RSI is rising and volume is supportive. Target: ${(price * 1.05).toFixed(2)}.`
                : `Caution advised. ${sym} is showing resistance at current levels. Wait for a breakout above ${(price * 1.02).toFixed(2)} before going long.`;
        }

        if (lowerQuery.includes('sell') || lowerQuery.includes('short')) {
            const sentiment = Math.random() > 0.4 ? 'BEARISH' : 'NEUTRAL';
            return sentiment === 'BEARISH'
                ? `Sell signal based on MACD crossover. ${sym} could drop to ${(price * 0.95).toFixed(2)}.`
                : `Holding pattern suggested. Selling now might be premature as support at ${(price * 0.98).toFixed(2)} is strong.`;
        }

        if (lowerQuery.includes('trend') || lowerQuery.includes('analysis')) {
            return Math.random() > 0.5
                ? `${sym} is in an uptrend on the 4H timeframe. Support at ${(price * 0.98).toFixed(2)}.`
                : `${sym} is consolidating sideways. Breakout expected soon. volatility index is low.`;
        }

        if (lowerQuery.includes('risk') || lowerQuery.includes('safe')) {
            return "Current market volatility is MODERATE. Recommended leverage: 5x max. Always use a Stop Loss.";
        }

        if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
            return "Hello! usage: Ask me 'Should I buy?', 'Analyze trends', or 'Risk level'.";
        }

        return `I am analyzing that. Key metrics for ${sym}: RSI 54 (Neutral), MACD (Bullish Divergence). What would you like to execute?`;
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <button
                className={`ai-trigger-btn ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="ai-ring"></div>
                <span className="ai-emoji">🤖</span>
            </button>

            {/* Popup Chat Window */}
            <div className={`ai-popup ${isOpen ? 'visible' : ''}`}>
                <div className="ai-header">
                    <span className="ai-icon">✨</span> FusionAI Insight
                    <button className="close-popup" onClick={() => setIsOpen(false)}>×</button>
                </div>

                <div className="ai-messages">
                    {messages.map(msg => (
                        <div key={msg.id} className={`message ${msg.type}`}>
                            {msg.type === 'ai' && <span className="msg-avatar">🤖</span>}
                            <div className="msg-content">{msg.text}</div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message ai typing">
                            <span className="msg-avatar">🤖</span>
                            <div className="msg-content">Thinking<span className="dots">...</span></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="ai-input-area">
                    <input
                        type="text"
                        placeholder="Ask AI..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="send-btn" onClick={handleSendMessage}>
                        ➤
                    </button>
                </div>
            </div>
        </>
    );
};

export default AIAssistant;
