import React from 'react';
import styles from './select.module.scss';

export const Select: React.FC = () => {
    return (
        <>
            <select className={styles.root}>
                <option value="All">ALL</option>
                <option value="Complete">COMPLETE</option>
                <option value="Incomplete">INCOMPLETE</option>
            </select>
        </>
    );
};

export default Select;
