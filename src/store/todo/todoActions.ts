import {
    ADD_TODO,
    COMPLETED_TODO,
    CHANGE_TODO,
    DELETE_TODO,
    OPEN_TODO_MODAL,
    CLOSE_TODO_MODAL,
} from './constants';

export const addTodo = (text: string): { type: typeof ADD_TODO; payload: { text: string } } => ({
    type: ADD_TODO,
    payload: { text },
});
export const completeTodo = (
    id: number,
): { type: typeof COMPLETED_TODO; payload: { id: number } } => ({
    type: COMPLETED_TODO,
    payload: { id },
});
export const changeTodo = (
    id: number,
    text: string,
): { type: typeof CHANGE_TODO; payload: { id: number; text: string } } => ({
    type: CHANGE_TODO,
    payload: { id, text },
});
export const deleteTodo = (id: number): { type: typeof DELETE_TODO; payload: { id: number } } => ({
    type: DELETE_TODO,
    payload: { id },
});
export const openModal = (): { type: typeof OPEN_TODO_MODAL } => ({ type: OPEN_TODO_MODAL });
export const closeModal = (): { type: typeof CLOSE_TODO_MODAL } => ({ type: CLOSE_TODO_MODAL });
