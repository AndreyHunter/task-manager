import React from 'react';

import { Section } from '../components/atoms/section/Section';
import { Heading } from '../components/atoms/heading/Heading';
import { SearchBar } from '../components/molecules/searchBar/SearchBar';
import { Select } from '../components/atoms/select/Select';
import { ThemeButton } from '../components/atoms/themeButton/ThemeButton';
import { TodoList } from '../components/organisms/todoList/TodoList';
import { Container } from '../components/helpers/container/Container';

import styles from './App.module.scss';

export const App: React.FC = () => {
    return (
        <div className={styles.root}>
            <Section>
                <Container>
                    <Heading className={styles.title}>TODO LIST</Heading>
                </Container>
            </Section>
            <Container className={styles.search}>
                <div>
                    <SearchBar />
                    <Select />
                    <ThemeButton />
                </div>
            </Container>
            <TodoList />
        </div>
    );
};
