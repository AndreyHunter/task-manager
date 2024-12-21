import { RootState } from '../index';

import { LIGHT_THEME, DARK_THEME } from './constants';

type initialState = 'dark' | 'light';

type ThemeAction = { type: typeof LIGHT_THEME } | { type: typeof DARK_THEME };

const selectedTheme = localStorage.getItem('theme') as initialState;

export const themeReducer = (
    state: initialState = selectedTheme ?? 'light',
    action: ThemeAction,
) => {
    switch (action.type) {
        case LIGHT_THEME: {
            return 'light';
        }
        case DARK_THEME: {
            return 'dark';
        }
        default: {
            return state;
        }
    }
};

export const selectTheme = (state: RootState) => state.theme;
