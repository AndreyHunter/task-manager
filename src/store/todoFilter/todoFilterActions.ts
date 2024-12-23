import { TodoFilterActionTypes } from './TodoFilterActionTypes';

type TypeSetFilter = { type: typeof TodoFilterActionTypes.SET_FILTER; payload: { filter: string } };

export const setFilter = (filter: string): TypeSetFilter => ({
    type: TodoFilterActionTypes.SET_FILTER,
    payload: { filter },
});

type TypeSetSearch = { type: typeof TodoFilterActionTypes.SET_SEARCH; payload: { search: string } };

export const setSearch = (search: string): TypeSetSearch => ({
    type: TodoFilterActionTypes.SET_SEARCH,
    payload: {
        search,
    },
});
