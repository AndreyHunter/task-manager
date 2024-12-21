import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectTheme } from '../../../store/theme/themeReducer';

import MoonIcon from '../../../assets/images/svg/moon.svg?react';
import SunIcon from '../../../assets/images/svg/sun.svg?react';

import styles from './themeButton.module.scss';

export const ThemeButton: React.FC = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const handleSetTheme = () => {
        dispatch({
            type: theme === 'light' ? 'theme_dark' : 'theme_light',
        });
    };

    return (
        <button className={styles.root} onClick={handleSetTheme}>
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};
