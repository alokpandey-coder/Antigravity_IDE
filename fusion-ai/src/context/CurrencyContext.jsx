import React, { createContext, useState, useContext } from 'react';

const CurrencyContext = createContext();

export const currencies = {
    USD: { code: 'USD', symbol: '$', name: 'US Dollar' },
    EUR: { code: 'EUR', symbol: '€', name: 'Euro' },
    GBP: { code: 'GBP', symbol: '£', name: 'British Pound' },
    JPY: { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    CAD: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
};

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(currencies.USD);

    const updateCurrency = (currencyCode) => {
        if (currencies[currencyCode]) {
            setCurrency(currencies[currencyCode]);
        }
    };

    return (
        <CurrencyContext.Provider value={{ currency, updateCurrency, currencies }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => useContext(CurrencyContext);
