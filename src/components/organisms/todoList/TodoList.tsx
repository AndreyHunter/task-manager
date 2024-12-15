import React from 'react';
import clsx from 'clsx';

import { TodoItem } from '../../molecules/todoItem/TodoItem';

import { TypeTodos } from '../../../types/';

import styles from './todoList.module.scss';

interface TodoListProps extends React.HTMLAttributes<HTMLElement> {
    todos: TypeTodos;
    onCompleteTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onCompleteTodo, className }) => {
    const combinedClasses = clsx(styles.root, className);
    return (
        <ul className={combinedClasses}>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onCompleteTodo={() => onCompleteTodo(todo.id)}
                    />
                );
            })}
        </ul>
    );
};
