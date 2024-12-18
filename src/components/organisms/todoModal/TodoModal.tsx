import React, { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { Input } from '../../molecules/input/Input';
import { Button } from '../../atoms/button/Button';

import { useTheme } from '../../../context/ThemeProvider';

import styles from './todoModal.module.scss';

interface TodoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddTodo: (text: string) => void;
}

export const TodoModal: React.FC<TodoModalProps> = ({ isOpen, onClose, onAddTodo }) => {
    const ref = useRef<HTMLInputElement | null>(null);
    const { theme } = useTheme();
    const combinedClasses = clsx(styles.root, isOpen && styles.active);
    const contentClasses = clsx(
        styles.content,
        isOpen && styles.active,
        theme === 'dark' && styles.dark,
    );

    const [text, setText] = useState('');

    useEffect(() => {
        if (isOpen) {
            const handleKeydown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };

            document.addEventListener('keydown', handleKeydown);

            return () => {
                removeEventListener('keydown', handleKeydown);
            };
        }
    }, [isOpen, onClose]);

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text) {
            setText('');
            onClose();
            onAddTodo(text);
        }
    };

    const handleSetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div className={combinedClasses} onClick={onClose}>
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
                    <Button kind="transparent">CHANCEL</Button>
                    <Button type="submit">APPLY</Button>
                </div>
            </form>
        </div>
    );
};
