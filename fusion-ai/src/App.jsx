import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import TradingDashboard from './pages/TradingDashboard';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
    const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash || '#/');
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderPage = () => {
        if (currentHash === '#/about') {
            return <About />;
        }
        if (currentHash === '#/dashboard') {
            return <Dashboard />;
        }
        if (currentHash.startsWith('#/pricing')) {
            const section = currentHash.replace('#/pricing', '').replace('/', '') || 'commissions';
            return <Pricing section={section} />;
        }
        if (currentHash === '#/trade') {
            return <TradingDashboard />;
        }
        return <Home />;
    };

    return (
        <CurrencyProvider>
            <div className="App">
                <Navbar activeHash={currentHash} />
                {renderPage()}
            </div>
        </CurrencyProvider>
    );
}

export default App;
