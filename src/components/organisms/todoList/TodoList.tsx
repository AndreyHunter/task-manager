import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import SimpleBar from 'simplebar-react';

import { useDebounce } from '../../../hooks/debounce';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { completeTodo, changeTodo, deleteTodo } from '../../../store/todo/todoActions';

import { selectTodos } from '../../../store/todo/todoReducer';
import { selectTodoFilter } from '../../../store/todoFilter/todoFilterReducer';

import { filterTodos } from '../../../utils/filter';

import { EmptyMessage } from '../../molecules/emptyMessage/EmptyMessage';
import { TodoItem } from '../../molecules/todoItem/TodoItem';

import 'simplebar-react/dist/simplebar.min.css';
import './todoList.scss';

import styles from './todoList.module.scss';

export const TodoList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ className }) => {
    const combinedClasses = clsx(styles.root, className);

    const { items } = useAppSelector(selectTodos);
    const { filter, search } = useAppSelector(selectTodoFilter);
    const dispatch = useAppDispatch();

    const filteredTodos = useMemo(() => {
        return filterTodos({
            items,
            filter,
            search,
        });
    }, [items, filter, search]);

    const [showEditFormId, setShowEditFormId] = useState<string | null>(null);

    const handleCloseEditForm = () => {
        setShowEditFormId(null);
    };

    return (
        <>
            {items.length > 0 ? (
                <ul className={combinedClasses}>
                    <SimpleBar style={{ maxHeight: 470, paddingRight: 15 }}>
                        {filteredTodos.map((todo) => {
                            return (
                                <TodoItem
                                    key={todo.id}
                                    {...todo}
                                    onCompleteTodo={() => dispatch(completeTodo(todo.id))}
                                    onChangeTodo={(id, text: string) =>
                                        dispatch(changeTodo(id, text))
                                    }
                                    onDeleteTodo={() => dispatch(deleteTodo(todo.id))}
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
