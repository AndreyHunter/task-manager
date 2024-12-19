import React, { useState } from 'react';
import clsx from 'clsx';
import SimpleBar from 'simplebar-react';

import { useTodos, useAppDispatch } from '../../../context/TodoProvider';
import { completeTodo, changeTodo, deleteTodo } from '../../../store/todo/todoActions';

import { EmptyMessage } from '../../molecules/emptyMessage/EmptyMessage';
import { TodoItem } from '../../molecules/todoItem/TodoItem';

import 'simplebar-react/dist/simplebar.min.css';
import './todoList.scss';

import styles from './todoList.module.scss';

export const TodoList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ className }) => {
    const combinedClasses = clsx(styles.root, className);

    const { todos } = useTodos();
    const dispatch = useAppDispatch();

    const [showEditFormId, setShowEditFormId] = useState<number | null>(null);

    const handleCloseEditForm = () => {
        setShowEditFormId(null);
    };

    const handleCompleteTodo = (id: number) => {
        dispatch(completeTodo(id));
    };

    const handleChangeTodo = (id: number, text: string) => {
        dispatch(changeTodo(id, text));
    };

    const handleDeleteTodo = (id: number) => {
        dispatch(deleteTodo(id));
    };

    return (
        <>
            {todos.length > 0 ? (
                <ul className={combinedClasses}>
                    <SimpleBar style={{ maxHeight: 470, paddingRight: 15 }}>
                        {todos.map((todo) => {
                            return (
                                <TodoItem
                                    key={todo.id}
                                    {...todo}
                                    onCompleteTodo={() => handleCompleteTodo(todo.id)}
                                    onChangeTodo={handleChangeTodo}
                                    onDeleteTodo={() => handleDeleteTodo(todo.id)}
                                    onShowEditForm={setShowEditFormId}
                                    showEditFormId={showEditFormId}
                                    onCloseEditForm={handleCloseEditForm}
                                />
                            );
                        })}
                    </SimpleBar>
                </ul>
            ) : (
                <div className={styles.empty}>
                    <EmptyMessage />
                </div>
            )}
        </>
    );
};
