import React, { useRef, useEffect } from 'react';

import clsx from 'clsx';

import { useAppSelector } from '../../../store/hooks';

import { selectTheme } from '../../../store/theme/themeReducer';

import SendIcon from '../../../assets/images/svg/send.svg?react';

import styles from './editTodo.module.scss';

interface EditTodoProps {
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeTodo: (text: string) => void;
}

export const EditTodo: React.FC<EditTodoProps> = ({ value, onChange, onChangeTodo }) => {
    const theme = useAppSelector(selectTheme);
    const combinedClasses = clsx(styles.root, { [styles.dark]: theme === 'dark' });

    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            onChangeTodo(value);
        }
    };

    return (
        <form className={combinedClasses} onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Type new text"
                ref={ref}
            />
            <button>
                <SendIcon />
            </button>
        </form>
    );
};
