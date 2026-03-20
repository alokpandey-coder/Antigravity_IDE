import React, { useEffect } from 'react';
import './ToastResponse.css';

const ToastResponse = ({ messages, removeMessage }) => {
    return (
        <div className="toast-container">
            {messages.map(msg => (
                <div key={msg.id} className={`toast ${msg.type}`}>
                    {msg.text}
                </div>
            ))}
        </div>
    );
};

export default ToastResponse;
