import React, { useState } from 'react';
import { useImmer } from 'use-immer';

import { Section } from '../components/atoms/section/Section';
import { Heading } from '../components/atoms/heading/Heading';
import { TodoListHeader } from '../components/organisms/todoListHeader/TodoListHeader';
import { TodoList } from '../components/organisms/todoList/TodoList';
import { ModalButton } from '../components/atoms/modalButton/ModalButton';
import { EmptyMessage } from '../components/molecules/emptyMessage/EmptyMessage';
import { TodoModal } from '../components/organisms/todoModal/TodoModal';
import { Container } from '../components/helpers/container/Container';
import { TypeTodos } from '../types/';

import styles from './App.module.scss';

export const App: React.FC = () => {
    const [todos, setTodos] = useImmer<TypeTodos>([
        {
            id: 1,
            completed: false,
            text: 'Do something1',
        },
        {
            id: 2,
            completed: false,
            text: 'Do something2',
        },
        {
            id: 3,
            completed: false,
            text: 'Do something3',
        },
        {
            id: 4,
            completed: false,
            text: 'Do something4',
        },
    ]);
    const [isOpen, setIsOpen] = useState(false);

    const handleAddTodo = (text: string) => {
        setTodos((draft) => {
            draft.push({ id: performance.now(), text, completed: false });
        });
    };

    const handleCompleteTodo = (id: number) => {
        setTodos((draft) => {
            const todo = draft.find((todo) => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        });
    };

    const handleChangeTodo = (id: number, text: string) => {
        setTodos((draft) => {
            const todo = draft.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        });
    };

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className={styles.root}>
            <Container className={styles.container}>
                <Section>
                    <Heading className={styles.title}>TODO LIST</Heading>
                </Section>
                <TodoListHeader />
                {todos.length > 0 ? (
                    <div className={styles.list}>
                        <TodoList
                            todos={todos}
                            onCompleteTodo={handleCompleteTodo}
                            onChangeTodo={handleChangeTodo}
                            onDeleteTodo={handleDeleteTodo}
                        />
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <EmptyMessage />
                    </div>
                )}

                <ModalButton className={styles.modalBtn} onClick={() => setIsOpen(true)} />
            </Container>
            <TodoModal isOpen={isOpen} onClose={() => setIsOpen(false)} onAddTodo={handleAddTodo} />
        </div>
    );
};
