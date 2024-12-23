import { RootState } from '../index';

import { ThemeActionTypes } from './ThemeActionTypes';

type initialState = 'dark' | 'light';

export type ThemeAction =
    | { type: typeof ThemeActionTypes.LIGHT_THEME }
    | { type: typeof ThemeActionTypes.DARK_THEME };

const selectedTheme = localStorage.getItem('theme') as initialState;

export const themeReducer = (
    state: initialState = selectedTheme ?? 'light',
    action: ThemeAction,
) => {
    switch (action.type) {
        case ThemeActionTypes.LIGHT_THEME: {
            return 'light';
        }
        case ThemeActionTypes.DARK_THEME: {
            return 'dark';
        }
        default: {
            return state;
        }
    }
};

export const selectTheme = (state: RootState) => state.theme;
