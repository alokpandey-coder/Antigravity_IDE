import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        text: "Their attention to detail was remarkable; they made sure that each component of my automated strategy was carefully positioned for optimal effect. Not only was the logic visually intuitive, but it also successfully scaled my portfolio completely hands-free.",
        author: "Grace Roberts",
        role: "Manager.",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        text: "We integrated FusionAI's algo programs into our trading framework and immediately noticed the precision and speed advantage. The algorithms are incredibly smart, adaptive, and backed by solid historical analytics.",
        author: "Ayesha Khan",
        role: "Director of Analytics.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        text: "I was skeptical about AI trading at first, but FusionAI proved me wrong. The risk management features alone are worth it. My daily volume has grown steadily without the usual stress of manual chart tracking.",
        author: "Michael Chen",
        role: "Lead Systems Investor.",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        text: "The pattern recognition engine is blazingly fast. It catches breakout trades I would have definitely missed. Highly recommended for anyone serious about scaling their automated day trading.",
        author: "Sarah Jenkins",
        role: "Day Trader.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
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
        const interval = setInterval(nextTestimonial, 8000);
        return () => clearInterval(interval);
    }, []);

    const { text, author, role, avatar } = testimonialsData[currentIndex];

    return (
        <section className="testimonials">
            <div className="testimonials-header">
                <div className="section-subtitle center">
                    <span className="line"></span> CLIENT REVIEWS <span className="line"></span>
                </div>
                <h2>
                    Trusted By <span className="text-gradient-purple">Traders Worldwide</span>
                </h2>
                <p className="testimonials-desc">
                    Real clients, real results. See what traders are saying about Fusion AI.
                </p>
            </div>
            <div className="testimonials-carousel">
                <button className="carousel-btn prev-btn" onClick={prevTestimonial}>&#10094;</button>

                <div className="testimonial-card">
                    {/* Cyan Tracing Box */}
                    <div className="tech-inner-trace">
                        <div className="trace-dot1"></div>
                        <div className="trace-dot2"></div>
                    </div>
                    
                    {/* Corner Highlighters */}
                    <div className="tech-corner tc-tl"></div>
                    <div className="tech-corner tc-tr"></div>
                    <div className="tech-corner tc-bl"></div>
                    <div className="tech-corner tc-br"></div>

                    <div className="testimonial-text-pane">
                        <h4 className="client-name">{author}</h4>
                        <p className="client-role">{role}</p>
                        <p className="client-text">{text}</p>
                    </div>

                    <div className="testimonial-img-pane">
                        <div className="img-wrapper">
                            <img src={avatar} alt={author} />
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
