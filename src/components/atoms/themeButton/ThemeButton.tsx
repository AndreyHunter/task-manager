import React from 'react';

import { useTheme } from '../../../context/ThemeProvider';

import MoonIcon from '../../../assets/images/svg/moon.svg?react';
import SunIcon from '../../../assets/images/svg/sun.svg?react';

import styles from './themeButton.module.scss';

export const ThemeButton: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const handleSetTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <button className={styles.root} onClick={handleSetTheme}>
            {theme === 'white' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};
