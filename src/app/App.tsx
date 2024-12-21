import React from 'react';

import { Section } from '../components/atoms/section/Section';
import { Heading } from '../components/atoms/heading/Heading';
import { TodoListHeader } from '../components/organisms/todoListHeader/TodoListHeader';
import { TodoList } from '../components/organisms/todoList/TodoList';
import { ModalButton } from '../components/atoms/modalButton/ModalButton';
import { TodoModal } from '../components/organisms/todoModal/TodoModal';
import { Container } from '../components/helpers/container/Container';
import { ThemeSwitcher } from './ThemeSwitcher';

import styles from './App.module.scss';

export const App: React.FC = () => {
    return (
        <div className={styles.root}>
            <Container className={styles.container}>
                <Section>
                    <Heading className={styles.title}>TODO LIST</Heading>
                </Section>
                <TodoListHeader />
                <TodoList className={styles.list} />
                <ModalButton className={styles.modalBtn} />
            </Container>
            <TodoModal />
            <ThemeSwitcher />
        </div>
    );
};
