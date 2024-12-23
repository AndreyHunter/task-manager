import { v4 as uuidv4 } from 'uuid';

import type { AppThunk } from '../types';

import { generateError } from '../../utils/error';

import { TodoActionTypes } from './TodoActionTypes';

export const addTodo =
    (text: string): AppThunk =>
    async (dispatch, _, client) => {
        try {
            const res = await client.post('todos', {
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
        const res = await client.get('todos');
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
            const todo = await client.get(`todos/${id}`);

            await client.patch(`todos/${id}`, {
                completed: !todo.data.completed,
            });

            dispatch({
                type: TodoActionTypes.COMPLETED_TODO,
                payload: {
                    id,
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
            await client.patch(`todos/${id}`, {
                text,
            });
            dispatch({
                type: TodoActionTypes.CHANGED_TODO,
                payload: {
                    id,
                    text,
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
            await client.delete(`todos/${id}`);
            dispatch({
                type: TodoActionTypes.DELETED_TODO,
                payload: {
                    id,
                },
            });
        } catch (err) {
            generateError(err);
        }
    };
