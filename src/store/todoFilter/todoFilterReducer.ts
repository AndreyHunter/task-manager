import { RootState } from '../index';

import { SET_FILTER, SET_SEARCH } from './constants';

interface initialState {
    filter: string;
    search: string;
}

type TodoFilterAction =
    | {
          type: typeof SET_FILTER;
          payload: { filter: string };
      }
    | {
          type: typeof SET_SEARCH;
          payload: {
              search: string;
          };
      };

const initialState: initialState = {
    filter: 'all',
    search: '',
};

export const todoFilterReducer = (state: initialState = initialState, action: TodoFilterAction) => {
    switch (action.type) {
        case SET_FILTER: {
            return {
                ...state,
                filter: action.payload.filter,
            };
        }
        case SET_SEARCH: {
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

export const selectTodoFilter = (state: RootState) => state.filter;
