import { v4 as uuidv4 } from 'uuid';

import type { AppThunk } from '../types';
import { TodoActionTypes } from './TodoActionTypes';
import type { TypeTodo, TypeTodos } from '../../types/';

import { generateError } from '../../utils/error';

export const addTodo =
    (text: string): AppThunk =>
    async (dispatch, _, client) => {
        try {
            const res = await client.post<TypeTodo>('todos', {
                id: uuidv4(),
                text,
                completed: false,
            });

            dispatch({
                type: TodoActionTypes.ADDED_TODO,
                payload: {
                    todo: res.data,
                },
            });
        } catch (err) {
            generateError(err);
        }
    };

export const fetchTodos = (): AppThunk => async (dispatch, _, client) => {
    dispatch({
        type: TodoActionTypes.SET_LOADING,
        payload: true,
    });
    try {
        const res = await client.get<TypeTodos>('todos');
        dispatch({
            type: TodoActionTypes.SET_TODOS,
            payload: { items: res.data },
        });
    } catch (err) {
        const error = err as Error;
        generateError(err);
        dispatch({
            type: TodoActionTypes.SET_ERROR,
            payload: { error: error.message },
        });
    } finally {
        dispatch({
            type: TodoActionTypes.SET_LOADING,
            payload: false,
        });
    }
};

export const completeTodo = (id: string): AppThunk => {
    return async function (dispatch, _, client) {
        try {
            const todo = await client.get<TypeTodo>(`todos/${id}`);

            const res = await client.patch<TypeTodo>(`todos/${id}`, {
                completed: !todo.data.completed,
            });

            dispatch({
                type: TodoActionTypes.COMPLETED_TODO,
                payload: {
                    todo: res.data,
                },
            });
        } catch (err) {
            generateError(err);
        }
    };
};

export const changeTodo =
    (id: string, text: string): AppThunk =>
    async (dispatch, _, client) => {
        try {
            const res = await client.patch<TypeTodo>(`todos/${id}`, {
                text,
            });
            dispatch({
                type: TodoActionTypes.CHANGED_TODO,
                payload: {
                    todo: res.data,
                },
            });
        } catch (err) {
            generateError(err);
        }
    };

export const deleteTodo =
    (id: string): AppThunk =>
    async (dispatch, _, client) => {
        try {
            const res = await client.delete<TypeTodo>(`todos/${id}`);
            dispatch({
                type: TodoActionTypes.DELETED_TODO,
                payload: {
                    todo: res.data,
                },
            });
        } catch (err) {
            generateError(err);
        }
    };
