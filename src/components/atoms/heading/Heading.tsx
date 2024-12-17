import React, { useContext } from 'react';
import { SectionContext } from '../../../context/SectionContext';

import styles from './heading.module.scss';
import clsx from 'clsx';

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, className }) => {
    const level = useContext(SectionContext);
    const combinedClasses = clsx(styles.root, className);

    switch (level) {
        case 1: {
            return <h1 className={combinedClasses}>{children}</h1>;
        }
        case 2: {
            return <h2 className={combinedClasses}>{children}</h2>;
        }
        case 3: {
            return <h3 className={combinedClasses}>{children}</h3>;
        }
        case 4: {
            return <h4 className={combinedClasses}>{children}</h4>;
        }
        case 5: {
            return <h5 className={combinedClasses}>{children}</h5>;
        }
        case 6: {
            return <h6 className={combinedClasses}>{children}</h6>;
        }
    }
};
