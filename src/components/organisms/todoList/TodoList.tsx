import React, { useState } from 'react';
import clsx from 'clsx';

import { TodoItem } from '../../molecules/todoItem/TodoItem';

import { TypeTodos } from '../../../types/';

import styles from './todoList.module.scss';

interface TodoListProps extends React.HTMLAttributes<HTMLElement> {
    todos: TypeTodos;
    onCompleteTodo: (id: number) => void;
    onChangeTodo: (id: number, text: string) => void;
    onDeleteTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    onCompleteTodo,
    onChangeTodo,
    onDeleteTodo,
    className,
}) => {
    const combinedClasses = clsx(styles.root, className);
    const [showEditFormId, setShowEditFormId] = useState<number | null>(null);

    const handleCloseEditForm = () => {
        setShowEditFormId(null);
    };

    return (
        <ul className={combinedClasses}>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onCompleteTodo={() => onCompleteTodo(todo.id)}
                        onChangeTodo={onChangeTodo}
                        onDeleteTodo={() => onDeleteTodo(todo.id)}
                        onShowEditForm={setShowEditFormId}
                        showEditFormId={showEditFormId}
                        onCloseEditForm={handleCloseEditForm}
                    />
                );
            })}
        </ul>
    );
};
