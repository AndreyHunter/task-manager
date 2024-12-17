import React, { useState, createContext, useContext, useEffect, ReactNode } from 'react';

type TypeThemeContext = {
    theme: string;
    setTheme: (theme: string) => void;
};

const ThemeContext = createContext<TypeThemeContext>({
    theme: 'light',
    setTheme: () => {},
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const savedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(savedTheme === 'dark' ? 'dark' : 'light');

    useEffect(() => {
        document.body.classList.remove('theme-light', 'theme-dark');
        document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
