import React from 'react';
import MoonIcon from '../../../assets/images/svg/moon.svg?react';
import SunIcon from '../../../assets/images/svg/sun.svg?react';

import styles from './themeButton.module.scss';

export const ThemeButton: React.FC = () => {
    return (
        <div className={styles.root}>{/* {type === 'moon' ? <MoonIcon /> : <SunIcon />} */}</div>
    );
};
