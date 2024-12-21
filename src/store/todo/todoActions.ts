import { ADD_TODO, COMPLETED_TODO, CHANGE_TODO, DELETE_TODO } from './constants';

export const addTodo = (text: string): { type: typeof ADD_TODO; payload: { text: string } } => ({
    type: ADD_TODO,
    payload: { text },
});

export const completeTodo = (
    id: string,
): { type: typeof COMPLETED_TODO; payload: { id: string } } => ({
    type: COMPLETED_TODO,
    payload: { id },
});
export const changeTodo = (
    id: string,
    text: string,
): { type: typeof CHANGE_TODO; payload: { id: string; text: string } } => ({
    type: CHANGE_TODO,
    payload: { id, text },
});
export const deleteTodo = (id: string): { type: typeof DELETE_TODO; payload: { id: string } } => ({
    type: DELETE_TODO,
    payload: { id },
});
