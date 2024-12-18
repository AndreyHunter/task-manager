import React, { useState } from 'react';

import { Section } from '../components/atoms/section/Section';
import { Heading } from '../components/atoms/heading/Heading';
import { Input } from '../components/molecules/input/Input';
import { Select } from '../components/atoms/select/Select';
import { ThemeButton } from '../components/atoms/themeButton/ThemeButton';
import { TodoList } from '../components/organisms/todoList/TodoList';
import { ModalButton } from '../components/atoms/modalButton/ModalButton';
import { EmptyMessage } from '../components/molecules/emptyMessage/EmptyMessage';
import { TodoModal } from '../components/organisms/todoModal/TodoModal';
import { Container } from '../components/helpers/container/Container';

import { TypeTodos } from '../types/';

import styles from './App.module.scss';

export const App: React.FC = () => {
    const [todos, setTodos] = useState<TypeTodos>([
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
        setTodos([...todos, { id: performance.now(), text, completed: false }]);
    };

    const handleCompleteTodo = (id: number) => {
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        );
    };

    const handleChangeTodo = (id: number, text: string) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
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
                <div className={styles.search}>
                    <Input placeholder="Search note..." search />
                    <Select />
                    <ThemeButton />
                </div>

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
