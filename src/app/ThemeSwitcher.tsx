import React, { useEffect } from 'react';

import { useAppSelector } from '../store/hooks';
import { selectTheme } from '../store/theme/themeReducer';

export const ThemeSwitcher: React.FC = () => {
    const theme = useAppSelector(selectTheme);

    useEffect(() => {
        document.body.classList.remove('theme-light', 'theme-dark');
        document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return null;
};
