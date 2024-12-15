import React from 'react';

import SearchIcon from '../../../assets/images/svg/search.svg?react';

import styles from './input.module.scss';

interface InputProps {
    search?: boolean;
    placeholder: string;
}

export const Input: React.FC<InputProps> = ({ search = false, placeholder }) => {
    return (
        <div className={styles.root}>
            <input type="text" placeholder={placeholder} />
            {search && <SearchIcon />}
        </div>
    );
};
