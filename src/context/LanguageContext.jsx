import { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext('english');


export function LanguageContextProvider({children}) {
    const [language, setLanguage] = useState('english');

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguageContext() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguageContext must be consumed from context provider')
    }
    return context
}