import { forwardRef } from 'react';

import clsx from 'clsx';

import { useTheme } from '../../../context/ThemeProvider';

import SearchIcon from '../../../assets/images/svg/search.svg?react';

import styles from './input.module.scss';

interface InputProps {
    search?: boolean;
    placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ search = false, placeholder }, ref) => {
        const { theme } = useTheme();
        const combinedClasses = clsx(styles.root, { [styles.dark]: theme === 'dark' });
        return (
            <div className={combinedClasses}>
                <input type="text" placeholder={placeholder} ref={ref} />
                {search && <SearchIcon />}
            </div>
        );
    },
);
