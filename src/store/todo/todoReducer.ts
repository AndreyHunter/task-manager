import { v4 as uuidv4 } from 'uuid';

import { TypeTodos } from '../../types';

import {
    ADD_TODO,
    COMPLETED_TODO,
    CHANGE_TODO,
    DELETE_TODO,
    OPEN_TODO_MODAL,
    CLOSE_TODO_MODAL,
} from './constants';

interface initialState {
    todos: TypeTodos;
    isOpen: boolean;
}

export const initialState: initialState = {
    todos: [
        {
            id: 1,
            completed: false,
            text: 'Do something1',
        },
        {
            id: 2,
            completed: false,
            text: 'Do something2',
        },
        {
            id: 3,
            completed: false,
            text: 'Do something3',
        },
        {
            id: 4,
            completed: false,
            text: 'Do something4',
        },
    ],
    isOpen: false,
};

type TypeAppTodoAction = {
    type: typeof ADD_TODO;
    payload: {
        text: string;
    };
};

type TypeCompletedTodoAction = {
    type: typeof COMPLETED_TODO;
    payload: {
        id: string;
    };
};

type TypeChangeTodoAction = {
    type: typeof CHANGE_TODO;
    payload: {
        id: string;
        text: string;
    };
};

type TypeDeleteTodoAction = {
    type: typeof DELETE_TODO;
    payload: {
        id: string;
    };
};

type TypeOpenTodoModal = {
    type: typeof OPEN_TODO_MODAL;
};

type TypeCloseTodoModal = {
    type: typeof CLOSE_TODO_MODAL;
};

export type TypeAction =
    | TypeAppTodoAction
    | TypeCompletedTodoAction
    | TypeChangeTodoAction
    | TypeDeleteTodoAction
    | TypeOpenTodoModal
    | TypeCloseTodoModal;

export const todoReducer = (state: initialState, action: TypeAction) => {
    switch (action.type) {
        case ADD_TODO:
            {
                state.todos.push({
                    id: uuidv4(),
                    text: action.payload.text,
                    completed: false,
                });
            }
            break;
        case COMPLETED_TODO:
            {
                const todo = state.todos.find((todo) => todo.id === action.payload.id);
                if (todo) {
                    todo.completed = !todo.completed;
                }
            }
            break;
        case CHANGE_TODO:
            {
                const todo = state.todos.find((todo) => todo.id === action.payload.id);
                if (todo) {
                    todo.text = action.payload.text;
                }
            }
            break;
        case DELETE_TODO:
            {
                const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
                state.todos.splice(todoIndex, 1);
            }
            break;
        case OPEN_TODO_MODAL:
            {
                state.isOpen = true;
            }
            break;
        case CLOSE_TODO_MODAL:
            {
                state.isOpen = false;
            }
            break;
        default: {
            return state;
        }
    }
};
