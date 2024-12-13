import React from 'react';

import { TodoItem } from '../../molecules/todoItem/TodoItem';
import { Container } from '../../helpers/container/Container';

import styles from './todoList.module.scss';

export const TodoList: React.FC = () => {
    return (
        <Container className={styles.root}>
            <ul>
                <TodoItem />
            </ul>
        </Container>
    );
};
