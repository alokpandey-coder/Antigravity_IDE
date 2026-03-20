import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        text: "FusionAI's trading algos have taken the guesswork out of my daily trades. I've seen more consistent profits and reduced emotional decision-making. The setup was smooth, and the support team is fantastic!",
        author: "RAJ MEHRA",
        role: "Client",
        avatar: "R"
    },
    {
        text: "We integrated FusionAI's algo programs into our trading strategy and immediately noticed the precision and speed advantage. The algorithms are smart, adaptive, and backed by solid analytics.",
        author: "AYESHA KHAN",
        role: "Client",
        avatar: "A"
    },
    {
        text: "I was skeptical about AI trading at first, but FusionAI proved me wrong. The risk management features alone are worth it. My portfolio has grown steadily without the usual stress of manual trading.",
        author: "MICHAEL CHEN",
        role: "Investor",
        avatar: "M"
    },
    {
        text: "The pattern recognition engine is incredibly fast. It catches breakout trades I would have definitely missed. Highly recommended for anyone serious about scaling their trading.",
        author: "SARAH JENKINS",
        role: "Day Trader",
        avatar: "S"
    },
    {
        text: "Consistent results week after week. The Live Market Dashboard is a game changer for monitoring my positions in real-time.",
        author: "DAVID O.",
        role: "Full-time Trader",
        avatar: "D"
    },
    {
        text: "Passive income was the goal, and FusionAI delivered. I just set my risk parameters and let the bot do the heavy lifting.",
        author: "PRIYA S.",
        role: "Enterprise Client",
        avatar: "P"
    },
    {
        text: "Exceptional customer service and a rock-solid platform. Running this on my VPS has been flawless with zero downtime.",
        author: "JAMES WILSON",
        role: "Tech Entrepreneur",
        avatar: "J"
    },
    {
        text: "The RL (Reinforcement Learning) model adapts so well to market volatility. It saved me from a major crash last month by exiting early.",
        author: "ELENA G.",
        role: "Forex Analyst",
        avatar: "E"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(nextTestimonial, 6000);
        return () => clearInterval(interval);
    }, []);

    const { text, author, role, avatar } = testimonialsData[currentIndex];

    return (
        <section className="testimonials">
            <h2 className="section-title">Client Testimonials</h2>
            <div className="testimonials-carousel">
                <button className="carousel-btn prev-btn" onClick={prevTestimonial}>&#10094;</button>

                <div className="testimonial-card active">
                    <p className="testimonial-text">"{text}"</p>
                    <div className="testimonial-author">
                        <div className="avatar-placeholder">{avatar}</div>
                        <div className="author-info">
                            <h4>{author}</h4>
                            <p>{role}</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-btn next-btn" onClick={nextTestimonial}>&#10095;</button>
            </div>

            <div className="carousel-dots">
                {testimonialsData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
