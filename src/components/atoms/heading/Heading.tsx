import React, { useContext } from 'react';
import { SectionContext } from '../../../context/SectionContext';

import styles from './heading.module.scss';

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
    const level = useContext(SectionContext);

    switch (level) {
        case 1: {
            return (
                <h1 className={styles.root} {...props}>
                    {children}
                </h1>
            );
        }
        case 2: {
            return (
                <h2 className={styles.root} {...props}>
                    {children}
                </h2>
            );
        }
        case 3: {
            return (
                <h3 className={styles.root} {...props}>
                    {children}
                </h3>
            );
        }
        case 4: {
            return (
                <h4 className={styles.root} {...props}>
                    {children}
                </h4>
            );
        }
        case 5: {
            return (
                <h5 className={styles.root} {...props}>
                    {children}
                </h5>
            );
        }
        case 6: {
            return (
                <h6 className={styles.root} {...props}>
                    {children}
                </h6>
            );
        }
    }
};
