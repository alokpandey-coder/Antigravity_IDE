import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2 className="section-title">Client Testimonials</h2>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <p className="testimonial-text">
                        "FusionAI's trading algos have taken the guesswork out of my daily trades. I've seen more consistent profits and reduced emotional decision-making. The setup was smooth, and the support team is fantastic!"
                    </p>
                    <div className="testimonial-author">
                        <div className="avatar-placeholder">R</div>
                        <div className="author-info">
                            <h4>RAJ MEHRA</h4>
                            <p>Client</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <p className="testimonial-text">
                        "We integrated FusionAI's algo programs into our trading strategy and immediately noticed the precision and speed advantage. The algorithms are smart, adaptive, and backed by solid analytics. It's like having a 24/7 expert on the team."
                    </p>
                    <div className="testimonial-author">
                        <div className="avatar-placeholder">A</div>
                        <div className="author-info">
                            <h4>AYESHA KHAN</h4>
                            <p>Client</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
