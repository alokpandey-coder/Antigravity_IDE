import React, { useRef } from 'react';
import './Influencers.css';

const influencersData = [
    { id: 1, name: 'Krypto Faint', img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=500&h=800' },
    { id: 2, name: 'CoinCheck TV', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=500&h=800' },
    { id: 3, name: 'Max Maher', img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=500&h=800' },
    { id: 4, name: 'Eddie Moon', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500&h=800' },
    { id: 5, name: 'MoneyZG', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&h=800' },
    { id: 6, name: 'Leonardo Vecchio', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500&h=800' },
];

const Influencers = () => {
    // Duplicate array to create a seamless infinite loop in CSS
    const duplicatedData = [...influencersData, ...influencersData];
    const trackRef = useRef(null);

    const handleTouchStart = () => {
        if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
    };

    const handleTouchEnd = () => {
        if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
    };

    return (
        <section className="influencers-section" id="influencers">
            <div className="influencers-header">
                <span className="accent">Influencers</span>
                <h2>Are Using FusionAI</h2>
            </div>

            <div className="influencers-track-container">
                <div 
                    className="influencers-scroll"
                    ref={trackRef}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {duplicatedData.map((influencer, index) => (
                        <div className="influencer-card" key={`inf-${index}`}>
                            <img src={influencer.img} alt={influencer.name} />
                            <div className="influencer-overlay">
                                <span className="influencer-name">{influencer.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Influencers;
