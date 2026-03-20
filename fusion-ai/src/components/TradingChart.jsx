
import React, { useRef, useEffect, useState } from 'react';

const TradingChart = ({ symbol, onPriceUpdate, chartType = 'line' }) => {
    const canvasRef = useRef(null);
    const [priceData, setPriceData] = useState([]);
    const [candleData, setCandleData] = useState([]);

    // Generator for simulated data
    useEffect(() => {
        const initialPrices = [];
        let price = 50000;
        for (let i = 0; i < 100; i++) {
            price = price + (Math.random() - 0.5) * 100;
            initialPrices.push(price);
        }
        setPriceData(initialPrices);

        // Generate initial candles
        const initialCandles = initialPrices.map(p => ({
            open: p - (Math.random() - 0.5) * 20,
            close: p,
            high: p + Math.random() * 30,
            low: p - Math.random() * 30,
            volume: Math.random() * 100
        }));
        setCandleData(initialCandles);
    }, [symbol]);

    // Animation Loop
    useEffect(() => {
        const interval = setInterval(() => {
            setPriceData(prev => {
                const lastPrice = prev[prev.length - 1];
                const variance = lastPrice * 0.002;
                const movement = (Math.random() - 0.5) * variance;
                const newPrice = lastPrice + movement;
                const newData = [...prev.slice(1), newPrice];

                if (onPriceUpdate) onPriceUpdate(newPrice);
                return newData;
            });

            setCandleData(prev => {
                const lastCandle = prev[prev.length - 1];
                const newOpen = lastCandle.close;
                const newClose = newOpen + (Math.random() - 0.5) * 50;
                const newHigh = Math.max(newOpen, newClose) + Math.random() * 20;
                const newLow = Math.min(newOpen, newClose) - Math.random() * 20;

                const newCandle = {
                    open: newOpen,
                    close: newClose,
                    high: newHigh,
                    low: newLow,
                    volume: Math.random() * 100
                };

                return [...prev.slice(1), newCandle];
            });

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Draw Chart
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        if (priceData.length < 2) return;

        // Auto-scale
        const allValues = chartType === 'line' ? priceData : candleData.map(c => [c.high, c.low]).flat();
        const min = Math.min(...allValues);
        const max = Math.max(...allValues);
        const range = max - min;

        const getY = (price) => height - ((price - min) / range) * (height - 60) - 30; // Added padding for volume
        const getX = (index) => (index / (priceData.length - 1)) * width;

        if (chartType === 'line') {
            // Draw Line
            ctx.beginPath();
            ctx.strokeStyle = '#00f2ff';
            ctx.lineWidth = 2;
            ctx.moveTo(getX(0), getY(priceData[0]));

            for (let i = 1; i < priceData.length; i++) {
                ctx.lineTo(getX(i), getY(priceData[i]));
            }
            ctx.stroke();

            // Fill Area
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.fillStyle = 'rgba(0, 242, 255, 0.1)';
            ctx.fill();
        } else {
            // Draw Candles
            const candleWidth = (width / candleData.length) * 0.6;

            candleData.forEach((candle, i) => {
                const x = getX(i);
                const isGreen = candle.close >= candle.open;
                const color = isGreen ? '#00ff88' : '#ff3333';

                ctx.strokeStyle = color;
                ctx.fillStyle = color;
                ctx.lineWidth = 1;

                // Wick
                ctx.beginPath();
                ctx.moveTo(x, getY(candle.high));
                ctx.lineTo(x, getY(candle.low));
                ctx.stroke();

                // Body
                const yOpen = getY(candle.open);
                const yClose = getY(candle.close);
                const candleHeight = Math.abs(yClose - yOpen);

                ctx.fillRect(x - candleWidth / 2, Math.min(yOpen, yClose), candleWidth, Math.max(candleHeight, 1));
            });
        }

        // Draw Volume Bars
        const maxVol = 100;
        const barWidth = (width / priceData.length) * 0.5;

        (chartType === 'line' ? priceData : candleData).forEach((item, i) => {
            const vol = chartType === 'line' ? Math.random() * 100 : item.volume;
            const volumeHeight = (vol / maxVol) * 30;
            const x = getX(i);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fillRect(x - barWidth / 2, height - volumeHeight, barWidth, volumeHeight);
        });

    }, [priceData, candleData, chartType]);

    return (
        <div style={{ width: '100%', height: '100%', background: '#0a0b1e', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
            <canvas
                ref={canvasRef}
                width={800}
                height={400}
                style={{ width: '100%', height: '100%' }}
            />
            <div style={{ position: 'absolute', top: 10, left: 10, color: '#fff', fontSize: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {symbol}
                <span style={{ fontSize: '12px', color: '#666', fontWeight: 'normal' }}>
                    {chartType === 'line' ? 'Line Chart' : 'Candles'}
                </span>
            </div>
        </div>
    );
};

export default TradingChart;

