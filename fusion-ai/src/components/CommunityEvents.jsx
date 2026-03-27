import React from 'react';
import './CommunityEvents.css';

const eventsData = [
    {
        id: 1,
        type: 'video',
        title: '2024 FusionAI Night',
        desc: 'Year-End Banquet. Thank you for being with us!',
        img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800&h=600'
    },
    {
        id: 2,
        type: 'video',
        title: 'Caring for Children with Autism',
        desc: 'Partnered with multiple workshops to host specialized care courses.',
        img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800&h=600'
    },
    {
        id: 3,
        type: 'feature',
        color: 'orange',
        title: 'FusionAI Bistro Night: Sharp Questions with Influencers',
        desc: 'The grandest side event featuring deep discussions.'
    },
    {
        id: 4,
        type: 'video',
        title: 'Global Summit 2025',
        desc: 'Connecting our global community of enthusiastic traders.',
        img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800&h=600'
    },
    {
        id: 5,
        type: 'feature',
        color: 'green',
        title: 'Charitable Donation to Hualien',
        desc: 'Every contribution is invaluable in the wake of unexpected disasters.'
    },
    {
        id: 6,
        type: 'video',
        title: 'Tech Meetup Series',
        desc: 'Exploring the future of algorithmic trading together.',
        img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800&h=600'
    }
];

const eventsDataRow2 = [
    {
        id: 7,
        type: 'feature',
        color: 'orange',
        title: 'Learn Trading from Top Crypto YouTubers',
        desc: 'Join the comprehensive masterclass and elevate your strategies.'
    },
    {
        id: 8,
        type: 'video',
        title: 'Weekly Market Analysis',
        desc: 'Live deep-dive into this week\'s crypto market trends.',
        img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800&h=600'
    },
    {
        id: 9,
        type: 'video',
        title: 'Community AMA',
        desc: 'Ask our founders anything in the monthly open forum.',
        img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800&h=600'
    },
    {
        id: 10,
        type: 'feature',
        color: 'green',
        title: 'New Listing Party',
        desc: 'Celebrate the arrival of the newest ecosystem tokens.'
    },
    {
        id: 11,
        type: 'video',
        title: 'Mastering Grid Bots',
        desc: 'Advanced strategies for profiting in high volatility markets.',
        img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800&h=600'
    },
    {
        id: 12,
        type: 'video',
        title: 'Local Meetup: London',
        desc: 'Networking event with the European algorithmic trader community.',
        img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800&h=600'
    }
];

const CommunityEvents = () => {
    // Duplicate for seamless infinite marquee scroll
    const duplicatedEvents = [...eventsData, ...eventsData];
    const duplicatedEventsRow2 = [...eventsDataRow2, ...eventsDataRow2];

    return (
        <section className="community-events-section">
            <div className="ce-header">
                <div className="ce-pill">Win-Win with Users</div>
                <div className="ce-subtitle">FusionAI's Pursuit</div>
            </div>

            <div className="ce-track-container">
                <div className="ce-scroll">
                    {duplicatedEvents.map((event, index) => (
                        <div 
                            className={`ce-card ${event.type === 'feature' ? `ce-feature-card ${event.color === 'green' ? 'green' : ''}` : 'ce-img-card'}`}
                            key={`ce-${index}`}
                        >
                            {event.type === 'video' && <img src={event.img} alt={event.title} />}
                            
                            <div className="ce-card-content">
                                <h3>{event.title}</h3>
                                {event.type === 'video' && <div className="ce-play-btn"></div>}
                                <p>{event.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ce-track-container" style={{ paddingTop: '0' }}>
                <div className="ce-scroll reverse">
                    {duplicatedEventsRow2.map((event, index) => (
                        <div 
                            className={`ce-card ${event.type === 'feature' ? `ce-feature-card ${event.color === 'green' ? 'green' : ''}` : 'ce-img-card'}`}
                            key={`ce2-${index}`}
                        >
                            {event.type === 'video' && <img src={event.img} alt={event.title} />}
                            
                            <div className="ce-card-content">
                                <h3>{event.title}</h3>
                                {event.type === 'video' && <div className="ce-play-btn"></div>}
                                <p>{event.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityEvents;
