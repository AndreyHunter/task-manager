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
        id: number;
    };
};

type TypeChangeTodoAction = {
    type: typeof CHANGE_TODO;
    payload: {
        id: number;
        text: string;
    };
};

type TypeDeleteTodoAction = {
    type: typeof DELETE_TODO;
    payload: {
        id: number;
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
        case ADD_TODO: {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: performance.now(),
                        text: action.payload.text,
                        completed: false,
                    },
                ],
            };
        }
        case COMPLETED_TODO: {
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        };
                    }
                    return todo;
                }),
            };
        }
        case CHANGE_TODO: {
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            text: action.payload.text,
                        };
                    }
                    return todo;
                }),
            };
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            };
        }
        case OPEN_TODO_MODAL: {
            return {
                ...state,
                isOpen: true,
            };
        }
        case CLOSE_TODO_MODAL: {
            return {
                ...state,
                isOpen: false,
            };
        }
        default: {
            return state;
        }
    }
};
