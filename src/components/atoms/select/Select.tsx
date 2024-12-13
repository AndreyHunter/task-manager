import React from 'react';
import styles from './select.module.scss';

export const Select: React.FC = () => {
    return (
        <select className={styles.root}>
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
        </select>
    );
};

export default Select;
