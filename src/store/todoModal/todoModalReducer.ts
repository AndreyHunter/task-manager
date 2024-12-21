import { RootState } from '../index';
import { OPENED_TODO_MODAL, CLOSED_TODO_MODAL } from './constants';

type TypeOpenTodoModal = {
    type: typeof OPENED_TODO_MODAL;
};

type TypeCloseTodoModal = {
    type: typeof CLOSED_TODO_MODAL;
};

type TypeTodoModalAction = TypeOpenTodoModal | TypeCloseTodoModal;

export const todoModalReducer = (state = false, action: TypeTodoModalAction) => {
    switch (action.type) {
        case OPENED_TODO_MODAL: {
            return true;
        }
        case CLOSED_TODO_MODAL: {
            return false;
        }
        default: {
            return state;
        }
    }
};

export const selectTodoModal = (state: RootState) => state.isOpen;
