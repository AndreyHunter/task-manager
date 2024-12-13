import React from 'react';
import { clsx } from 'clsx';
import styles from './container.module.scss';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
    const combinedClasses = clsx(styles.root, className);
    return <div className={combinedClasses}>{children}</div>;
};

export default Container;
