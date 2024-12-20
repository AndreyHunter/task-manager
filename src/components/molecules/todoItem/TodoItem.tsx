import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { CheckBox } from '../../atoms/checkBox/CheckBox';
import { EditTodo } from '../editTodo/EditTodo';

import PenIcon from '../../../assets/images/svg/pen.svg?react';
import TrashIcon from '../../../assets/images/svg/trash.svg?react';

interface TodoItemProps {
    id: string;
    text: string;
    completed: boolean;
    onCompleteTodo: () => void;
    onChangeTodo: (id: string, text: string) => void;
    onDeleteTodo: () => void;
    onShowEditForm: (id: string | null) => void;
    showEditFormId: string | null;
    onCloseEditForm: () => void;
}

import styles from './todoItem.module.scss';

export const TodoItem: React.FC<TodoItemProps> = ({
    id,
    text,
    completed,
    onCompleteTodo,
    onChangeTodo,
    onDeleteTodo,
    onShowEditForm,
    showEditFormId,
    onCloseEditForm,
}) => {
    const combinedClasses = clsx(styles.root, completed && styles.active);
    const [newText, setNewText] = useState(text);
    const ref = useRef<HTMLDivElement | null>(null);

    const showEditForm = showEditFormId === id;

    useEffect(() => {
        const handleCloseEditForm = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onCloseEditForm();
            }
        };

        if (showEditForm) {
            document.addEventListener('mousedown', handleCloseEditForm);
        }

        return () => {
            removeEventListener('mousedown', handleCloseEditForm);
        };
    }, [showEditForm, onCloseEditForm]);

    const handleSetNewText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewText(e.target.value);
    };

    const handleChangeTodo = () => {
        onChangeTodo(id, newText);
        onCloseEditForm();
    };

    return (
        <li className={combinedClasses}>
            <div className={styles.title}>
                <CheckBox checked={completed} onClick={onCompleteTodo} />
                <strong onClick={onCompleteTodo}>{text}</strong>
            </div>
            <div className={styles.actions}>
                {showEditForm && (
                    <div className={styles.edit} ref={ref}>
                        <EditTodo
                            value={newText}
                            onChange={handleSetNewText}
                            onChangeTodo={handleChangeTodo}
                        />
                    </div>
                )}
                <PenIcon
                    className={styles.pen}
                    onClick={() => onShowEditForm(showEditFormId ? null : id)}
                />
                <TrashIcon className={styles.trash} onClick={onDeleteTodo} />
            </div>
        </li>
    );
};
