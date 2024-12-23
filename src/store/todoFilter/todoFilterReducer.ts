import type { RootState } from '../index';

import { TodoFilterActionTypes } from './TodoFilterActionTypes';

interface TodoFilterState {
    filter: string;
    search: string;
}

type SetFilterAction = {
    type: typeof TodoFilterActionTypes.SET_FILTER;
    payload: { filter: string };
};

type SetSearchAction = {
    type: typeof TodoFilterActionTypes.SET_SEARCH;
    payload: {
        search: string;
    };
};

export type TodoFilterAction = SetFilterAction | SetSearchAction;

const initialState: TodoFilterState = {
    filter: 'all',
    search: '',
};

export const todoFilterReducer = (
    state: TodoFilterState = initialState,
    action: TodoFilterAction,
) => {
    switch (action.type) {
        case TodoFilterActionTypes.SET_FILTER: {
            return {
                ...state,
                filter: action.payload.filter,
            };
        }
        case TodoFilterActionTypes.SET_SEARCH: {
            return {
                ...state,
                search: action.payload.search,
            };
        }
        default: {
            return state;
        }
    }
};

export const selectTodoFilter = (state: RootState) => state.filter.filter;
export const selectTodoSearch = (state: RootState) => state.filter.search;
