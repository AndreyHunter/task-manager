import { TypeTodo, TypeTodos } from '../../types';
import { RootState } from '../index';

import { TodoActionTypes } from './TodoActionTypes';

interface TodoState {
    items: TypeTodos;
    isLoading: boolean;
    error: string | null;
}

const initialState: TodoState = {
    items: [],
    isLoading: false,
    error: null,
};

type AddTodoAction = {
    type: typeof TodoActionTypes.ADDED_TODO;
    payload: {
        todo: TypeTodo;
    };
};

type SetTodosAction = {
    type: typeof TodoActionTypes.SET_TODOS;
    payload: {
        items: TypeTodos;
    };
};

type SetTodosLoadingAction = {
    type: typeof TodoActionTypes.SET_LOADING;
    payload: boolean;
};

type SetTodosErrorAction = {
    type: typeof TodoActionTypes.SET_ERROR;
    payload: {
        error: string | null;
    };
};

type CompleteTodoAction = {
    type: typeof TodoActionTypes.COMPLETED_TODO;
    payload: {
        todo: TypeTodo;
    };
};

type ChangeTodoAction = {
    type: typeof TodoActionTypes.CHANGED_TODO;
    payload: {
        todo: TypeTodo;
    };
};

type DeleteTodoAction = {
    type: typeof TodoActionTypes.DELETED_TODO;
    payload: {
        todo: TypeTodo;
    };
};

export type TodosAction =
    | AddTodoAction
    | SetTodosAction
    | SetTodosLoadingAction
    | SetTodosErrorAction
    | CompleteTodoAction
    | ChangeTodoAction
    | DeleteTodoAction;

export const todoReducer = (state: TodoState = initialState, action: TodosAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.ADDED_TODO: {
            return {
                ...state,
                items: [...state.items, action.payload.todo],
            };
        }
        case TodoActionTypes.SET_TODOS: {
            return {
                ...state,
                items: action.payload.items,
            };
        }
        case TodoActionTypes.SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case TodoActionTypes.SET_ERROR: {
            return {
                ...state,
                error: action.payload.error,
            };
        }
        case TodoActionTypes.COMPLETED_TODO: {
            return {
                ...state,
                items: state.items.map((todo) =>
                    todo.id === action.payload.todo.id ? action.payload.todo : todo,
                ),
            };
        }
        case TodoActionTypes.CHANGED_TODO: {
            return {
                ...state,
                items: state.items.map((todo) =>
                    todo.id === action.payload.todo.id ? action.payload.todo : todo,
                ),
            };
        }
        case TodoActionTypes.DELETED_TODO: {
            return {
                ...state,
                items: state.items.filter((todo) => todo.id !== action.payload.todo.id),
            };
        }
        default: {
            return state;
        }
    }
};

export const selectTodos = (state: RootState) => state.todos;
