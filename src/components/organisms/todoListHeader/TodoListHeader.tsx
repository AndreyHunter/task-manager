import React from 'react';

import { Input } from '../../molecules/input/Input';
import { Select } from '../../atoms/select/Select';
import { ThemeButton } from '../../atoms/themeButton/ThemeButton';

import styles from './todoListHeader.module.scss';

export const TodoListHeader: React.FC = () => {
    return (
        <header className={styles.root}>
            <Input placeholder="Search note..." search />
            <Select />
            <ThemeButton />
        </header>
    );
};
