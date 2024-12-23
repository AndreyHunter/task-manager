import React, { useEffect, useRef, useState, useCallback } from 'react';

import clsx from 'clsx';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectTheme } from '../../../store/theme/themeReducer';
import { selectTodoModal } from '../../../store/todoModal/todoModalReducer';
import { addTodo } from '../../../store/todo/todoActions';
import { closeModal } from '../../../store/todoModal/todoModalActions';

import { Input } from '../../molecules/input/Input';
import { Button } from '../../atoms/button/Button';

import styles from './todoModal.module.scss';

export const TodoModal: React.FC = () => {
    const isOpen = useAppSelector(selectTodoModal);
    const dispatch = useAppDispatch();

    const ref = useRef<HTMLInputElement | null>(null);
    const theme = useAppSelector(selectTheme);
    const combinedClasses = clsx(styles.root, isOpen && styles.active);
    const contentClasses = clsx(
        styles.content,
        isOpen && styles.active,
        theme === 'dark' && styles.dark,
    );

    const [text, setText] = useState('');

    const handleCloseModal = useCallback(() => {
        dispatch(closeModal());
    }, [dispatch]);

    useEffect(() => {
        if (isOpen) {
            const handleKeydown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    handleCloseModal();
                }
            };

            document.addEventListener('keydown', handleKeydown);

            return () => {
                removeEventListener('keydown', handleKeydown);
            };
        }
    }, [isOpen, handleCloseModal]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (isOpen && ref.current) {
                ref.current.focus();
            }
        }, 100);

        return () => {
            clearTimeout(timerId);
        };
    }, [isOpen]);

    const handleAddTodo = (text: string) => {
        dispatch(addTodo(text));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text) {
            setText('');
            handleCloseModal();
            handleAddTodo(text);
        }
    };

    const handleSetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div className={combinedClasses} onClick={handleCloseModal}>
            <form
                className={contentClasses}
                onClick={(e) => e.stopPropagation()}
                onSubmit={handleSubmit}
            >
                <div>
                    <div className={styles.title}>NEW NOTE</div>
                    <Input
                        placeholder="Input your note..."
                        ref={ref}
                        value={text}
                        onChange={handleSetInput}
                    />
                </div>
                <div className={styles.buttons}>
                    <Button kind="transparent" onClick={handleCloseModal}>
                        CHANCEL
                    </Button>
                    <Button type="submit">APPLY</Button>
                </div>
            </form>
        </div>
    );
};
