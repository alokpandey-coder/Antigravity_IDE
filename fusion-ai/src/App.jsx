import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

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
        return <Home />;
    };

    return (
        <div className="App">
            <Navbar activeHash={currentHash} />
            {renderPage()}
        </div>
    );
}

export default App;
