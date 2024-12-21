import { SET_FILTER, SET_SEARCH } from './constants';

type TypeSetFilter = { type: typeof SET_FILTER; payload: { filter: string } };

export const setFilter = (filter: string): TypeSetFilter => ({
    type: SET_FILTER,
    payload: { filter },
});

type TypeSetSearch = { type: typeof SET_SEARCH; payload: { search: string } };

export const setSearch = (search: string): TypeSetSearch => ({
    type: SET_SEARCH,
    payload: {
        search,
    },
});
