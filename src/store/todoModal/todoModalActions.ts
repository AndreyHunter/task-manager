import { TodoModalActionTypes } from './TodoModalActionTypes';

export const openModal = (): { type: typeof TodoModalActionTypes.OPENED_TODO_MODAL } => ({
    type: TodoModalActionTypes.OPENED_TODO_MODAL,
});
export const closeModal = (): { type: typeof TodoModalActionTypes.CLOSED_TODO_MODAL } => ({
    type: TodoModalActionTypes.CLOSED_TODO_MODAL,
});
