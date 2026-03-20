import React, { useEffect, useRef } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const container = useRef();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
      {
        "autosize": true,
        "symbol": "FX:EURUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
        container.current.appendChild(script);

        return () => {
            // Cleanup script to avoid duplicates on re-render
            if (container.current) {
                container.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                <h2>Live Market Dashboard</h2>
                <a href="/" className="back-btn">← Back to Home</a>
            </div>
            <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
                <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            </div>
        </div>
    );
};

export default Dashboard;
