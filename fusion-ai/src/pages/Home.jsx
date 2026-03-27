import React from 'react';

import Hero from '../components/Hero';
import Features from '../components/Features';
import Discover from '../components/Discover';
import Offerings from '../components/Offerings';
import Influencers from '../components/Influencers';
import CommunityEvents from '../components/CommunityEvents';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import RiskMeter from '../components/RiskMeter';
import StrategyEngine from '../components/StrategyEngine';
import Footer from '../components/Footer';
import AIChatbot from '../components/AIChatbot';
import RiskSimulator from '../components/RiskSimulator';

const Home = () => {
    return (
        <>

            <Hero />
            <WhyChooseUs />
            <Discover />
            <Features />
            <Offerings />
            <Influencers />
            <CommunityEvents />
            <RiskSimulator />
            <StrategyEngine />
            <Testimonials />
            <FAQ />
            <Disclaimer />
            <Footer />
            <AIChatbot />
        </>
    );
};

export default Home;
