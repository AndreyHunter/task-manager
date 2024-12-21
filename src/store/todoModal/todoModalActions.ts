import { OPENED_TODO_MODAL, CLOSED_TODO_MODAL } from './constants';

export const openModal = (): { type: typeof OPENED_TODO_MODAL } => ({ type: OPENED_TODO_MODAL });
export const closeModal = (): { type: typeof CLOSED_TODO_MODAL } => ({ type: CLOSED_TODO_MODAL });
