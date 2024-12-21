import { TypeTodos } from '../types';

type TypeFilterTodos = {
    items: TypeTodos;
    filter: string;
    search: string;
};

export const filterTodos = ({ items, filter, search }: TypeFilterTodos) => {
    // let result = [];
    // result = items.filter((todo) => {
    //     if (filter === 'complete') {
    //         return todo.completed;
    //     } else if (filter === 'incomplete') {
    //         return !todo.completed;
    //     } else {
    //         return todo;
    //     }
    // });
    // result = result.filter((todo) => {
    //     const todoText = todo.text.toLowerCase();
    //     const searchText = search.toLowerCase();
    //     if (todoText.includes(searchText)) {
    //         return todo;
    //     }
    // });
    // return result;
    //
    // return items.filter((todo) => {
    //     const todoText = todo.text.toLowerCase();
    //     const searchText = search.toLowerCase();
    //     const isMatch = todoText.includes(searchText);
    //     const isComplete = filter === 'complete';
    //     const isIncomplete = filter === 'incomplete';
    //     const filtered = isComplete ? todo.completed : isIncomplete ? !todo.completed : true;
    //     return isMatch && filtered;
    // });
    const normalizedSearch = search.toLowerCase();

    const filteredByStatus = items.filter((todo) => {
        if (filter === 'complete') {
            return todo.completed;
        } else if (filter === 'incomplete') {
            return !todo.completed;
        } else {
            return true;
        }
    });

    const filtered = filteredByStatus.filter((todo) => {
        return todo.text.toLowerCase().includes(normalizedSearch);
    });

    return filtered;
};
