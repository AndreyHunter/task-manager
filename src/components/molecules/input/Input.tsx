import React, { forwardRef } from 'react';

import clsx from 'clsx';

import { useAppSelector } from '../../../store/hooks';
import { selectTheme } from '../../../store/theme/themeReducer';

import SearchIcon from '../../../assets/images/svg/search.svg?react';

import styles from './input.module.scss';

interface InputProps {
    search?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ search = false, placeholder, value, onChange }, ref) => {
        const theme = useAppSelector(selectTheme);
        const combinedClasses = clsx(styles.root, { [styles.dark]: theme === 'dark' });

        return (
            <div className={combinedClasses}>
                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder={placeholder}
                    ref={ref}
                />
                {search && <SearchIcon />}
            </div>
        );
    },
);
