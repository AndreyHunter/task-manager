import { ThunkAction } from 'redux-thunk';

import axios from '../axios';

import type { RootState } from './index';

import type { ThemeAction } from './theme/themeReducer';
import type { TodosAction } from './todo/todoReducer';
import type { TodoFilterAction } from './todoFilter/todoFilterReducer';
import type { TodoModalAction } from './todoModal/todoModalReducer';

export type ExtraArgs = typeof axios;
export type AppAction = ThemeAction | TodosAction | TodoFilterAction | TodoModalAction;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, ExtraArgs, AppAction>;
