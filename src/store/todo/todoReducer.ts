import { v4 as uuidv4 } from 'uuid';

import { TypeTodos } from '../../types';
import { RootState } from '../index';

import { ADD_TODO, COMPLETED_TODO, CHANGE_TODO, DELETE_TODO } from './constants';

interface initialState {
    items: TypeTodos;
    isLoading: boolean;
    error: string | null;
}

const initialState: initialState = {
    items: [
        {
            id: '1',
            completed: false,
            text: 'brush teeth and go to the bathroom ',
        },
        {
            id: '2',
            completed: false,
            text: 'drink a cup of warm water',
        },
        {
            id: '3',
            completed: false,
            text: 'exercises',
        },
        {
            id: '4',
            completed: false,
            text: 'have a shower and save',
        },
        {
            id: '5',
            completed: false,
            text: 'meditation ( 10 minutes )',
        },
        {
            id: '6',
            completed: false,
            text: 'make breakfast and coffee / tea',
        },
        {
            id: '7',
            completed: false,
            text: 'have breakfast and tea',
        },
    ],
    isLoading: false,
    error: null,
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

type TypeAction =
    | TypeAppTodoAction
    | TypeCompletedTodoAction
    | TypeChangeTodoAction
    | TypeDeleteTodoAction;

export const todoReducer = (
    state: initialState = initialState,
    action: TypeAction,
): initialState => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: uuidv4(),
                        text: action.payload.text,
                        completed: false,
                    },
                ],
            };
        }
        case COMPLETED_TODO: {
            return {
                ...state,
                items: state.items.map((todo) => {
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
                items: state.items.map((todo) => {
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
                items: state.items.filter((todo) => todo.id !== action.payload.id),
            };
        }
        default: {
            return state;
        }
    }
};

export const selectTodos = (state: RootState) => state.todos;
