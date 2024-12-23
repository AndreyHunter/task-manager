import {
    legacy_createStore as createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from '@reduxjs/toolkit';

import { ThunkDispatch, withExtraArgument } from 'redux-thunk';

import type { AppAction } from './types';

import axios from '../axios';

import { todoReducer } from './todo/todoReducer';
import { todoModalReducer } from './todoModal/todoModalReducer';
import { themeReducer } from './theme/themeReducer';
import { todoFilterReducer } from './todoFilter/todoFilterReducer';

import type { ExtraArgs } from './types';

const rootReducer = combineReducers({
    todos: todoReducer,
    isOpen: todoModalReducer,
    theme: themeReducer,
    filter: todoFilterReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(withExtraArgument(axios))),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, ExtraArgs, AppAction>;
// export type AppStore = typeof store;
