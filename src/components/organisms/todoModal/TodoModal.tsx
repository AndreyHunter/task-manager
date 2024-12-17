import React, { useEffect, useRef } from 'react';

import clsx from 'clsx';

import { Input } from '../../molecules/input/Input';
import { Button } from '../../atoms/button/Button';

import { useTheme } from '../../../context/ThemeProvider';

import styles from './todoModal.module.scss';

interface TodoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TodoModal: React.FC<TodoModalProps> = ({ isOpen, onClose }) => {
    const ref = useRef<HTMLInputElement | null>(null);
    const { theme } = useTheme();
    const combinedClasses = clsx(styles.root, isOpen && styles.active);
    const contentClasses = clsx(
        styles.content,
        isOpen && styles.active,
        theme === 'dark' && styles.dark,
    );

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

    return (
        <div className={combinedClasses} onClick={onClose}>
            <div className={contentClasses} onClick={(e) => e.stopPropagation()}>
                <div>
                    <div className={styles.title}>NEW NOTE</div>
                    <Input placeholder="Input your note..." ref={ref} />
                </div>
                <div className={styles.buttons}>
                    <Button type="transparent">CHANCEL</Button>
                    <Button>APPLY</Button>
                </div>
            </div>
        </div>
    );
};
