import React, { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import SimpleBar from 'simplebar-react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchTodos, completeTodo, changeTodo, deleteTodo } from '../../../store/todo/todoActions';

import { selectTodos } from '../../../store/todo/todoReducer';
import { selectTodoFilter, selectTodoSearch } from '../../../store/todoFilter/todoFilterReducer';

import { filterTodos } from '../../../utils/filter';

import { EmptyMessage } from '../../molecules/emptyMessage/EmptyMessage';
import { TodoItem } from '../../molecules/todoItem/TodoItem';
import { Loader } from '../../atoms/loader/Loader';

import 'simplebar-react/dist/simplebar.min.css';
import './todoList.scss';

import styles from './todoList.module.scss';

export const TodoList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ className }) => {
    const combinedClasses = clsx(styles.root, className);

    const { items, isLoading, error } = useAppSelector(selectTodos);
    const filter = useAppSelector(selectTodoFilter);
    const search = useAppSelector(selectTodoSearch);
    const dispatch = useAppDispatch();

    const [isDataFetched, setIsDataFetched] = useState(false);

    useEffect(() => {
        dispatch(fetchTodos());
        setIsDataFetched(true);
    }, [dispatch]);

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
            {isLoading ? (
                <div className={styles.padding}>
                    <Loader />
                </div>
            ) : error ? (
                <div className={styles.padding}>{error}</div>
            ) : isDataFetched && items.length < 1 ? (
                <div className={styles.empty}>
                    <EmptyMessage />
                </div>
            ) : (
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
            )}
        </>
    );
};
