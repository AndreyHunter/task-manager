import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './button.module.scss';

interface ButtonProps {
    type?: string;
    children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type = 'default', children }) => {
    const combinedClasses = clsx(styles.root, type === 'transparent' && styles.transparent);
    return (
        <button type="button" className={combinedClasses}>
            {children}
        </button>
    );
};
