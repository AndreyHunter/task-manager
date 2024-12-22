import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { selectTodoFilter } from '../../../store/todoFilter/todoFilterReducer';
import { setFilter } from '../../../store/todoFilter/todoFilterActions';

import styles from './select.module.scss';

export const Select: React.FC = () => {
    const filter = useAppSelector(selectTodoFilter);
    const dispatch = useAppDispatch();

    const handleSetFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilter(e.target.value));
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
