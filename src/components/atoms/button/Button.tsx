import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    kind?: string;
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    kind = 'default',
    children,
    type = 'button',
    ...props
}) => {
    const combinedClasses = clsx(styles.root, kind === 'transparent' && styles.transparent);
    return (
        <button type={type} className={combinedClasses} {...props}>
            {children}
        </button>
    );
};
