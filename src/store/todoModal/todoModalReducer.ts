import { RootState } from '../index';
import { TodoModalActionTypes } from './TodoModalActionTypes';

type OpenTodoModalAction = {
    type: typeof TodoModalActionTypes.OPENED_TODO_MODAL;
};

type CloseTodoModalAction = {
    type: typeof TodoModalActionTypes.CLOSED_TODO_MODAL;
};

export type TodoModalAction = OpenTodoModalAction | CloseTodoModalAction;

export const todoModalReducer = (state = false, action: TodoModalAction) => {
    switch (action.type) {
        case TodoModalActionTypes.OPENED_TODO_MODAL: {
            return true;
        }
        case TodoModalActionTypes.CLOSED_TODO_MODAL: {
            return false;
        }
        default: {
            return state;
        }
    }
};

export const selectTodoModal = (state: RootState) => state.isOpen;
