import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Discover from '../components/Discover';
import Offerings from '../components/Offerings';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Discover />
            <Offerings />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
            <Disclaimer />
            <Footer />
        </>
    );
};

export default Home;
