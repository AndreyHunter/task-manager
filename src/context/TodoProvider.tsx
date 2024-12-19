import React, { createContext, useReducer, ReactNode, Dispatch, useContext } from 'react';

import { todoReducer, initialState } from '../store/todo/todoReducer';
import { TypeTodos } from '../types/';
import { TypeAction } from '../store/todo/todoReducer';

type TypeTodoContext = {
    todos: TypeTodos;
    isOpen: boolean;
};

const TodoContext = createContext<TypeTodoContext>({
    todos: [],
    isOpen: false,
});

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoDispatchContext = createContext<Dispatch<TypeAction>>((() => {
    throw new Error('TodoDispatchContext must be used within a Provider');
}) as any);

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [{ todos, isOpen }, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ todos, isOpen }}>
            <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);
export const useAppDispatch = () => useContext(TodoDispatchContext);
