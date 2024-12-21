import { legacy_createStore as createStore, combineReducers, compose } from '@reduxjs/toolkit';

import { todoReducer } from './todo/todoReducer';
import { todoModalReducer } from './todoModal/todoModalReducer';
import { themeReducer } from './theme/themeReducer';
import { todoFilterReducer } from './todoFilter/todoFilterReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
    isOpen: todoModalReducer,
    theme: themeReducer,
    filter: todoFilterReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppStore = typeof store;
