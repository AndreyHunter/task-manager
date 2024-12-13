import React, { useContext } from 'react';

import { SectionContext } from '../../../context/SectionContext';

import styles from './section.module.scss';

interface SectionProps {
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
    const level = useContext(SectionContext);

    return (
        <SectionContext.Provider value={level + 1}>
            <section className={styles.root}>{children}</section>
        </SectionContext.Provider>
    );
};
