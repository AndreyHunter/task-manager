import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import styles from './select.module.scss';

export const Select: React.FC = () => {
    const { filter } = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();

    const handleSetFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: 'set_filter',
            payload: {
                filter: e.target.value,
            },
        });
    };

    return (
        <select className={styles.root} value={filter} onChange={handleSetFilter}>
            <option value="all">ALL</option>
            <option value="complete">COMPLETE</option>
            <option value="incomplete">INCOMPLETE</option>
        </select>
    );
};

export default Select;
