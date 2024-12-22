import React, { useState } from 'react';

import { useDebounce } from '../../../hooks/useDebounce';

import { useAppDispatch } from '../../../store/hooks';
import { setSearch } from '../../../store/todoFilter/todoFilterActions';

import { Input } from '../../molecules/input/Input';
import { Select } from '../../atoms/select/Select';
import { ThemeButton } from '../../atoms/themeButton/ThemeButton';

import styles from './todoListHeader.module.scss';

export const TodoListHeader: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useAppDispatch();

    const debouncedSearch = useDebounce((search: string) => {
        dispatch(setSearch(search));
    }, 200);

    const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        debouncedSearch(e.target.value);
    };

    return (
        <header className={styles.root}>
            <Input
                placeholder="Search note..."
                search
                value={searchText}
                onChange={handleSetSearch}
            />
            <Select />
            <ThemeButton />
        </header>
    );
};
