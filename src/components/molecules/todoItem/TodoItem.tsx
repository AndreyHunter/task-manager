import React from 'react';

import { CheckBox } from '../../atoms/checkBox/CheckBox';

import PenIcon from '../../../assets/images/svg/pen.svg?react';
import TrashIcon from '../../../assets/images/svg/trash.svg?react';

interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
    onCompleteTodo: () => void;
}

import styles from './todoItem.module.scss';

export const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onCompleteTodo }) => {
    return (
        <li className={styles.root}>
            <div className={styles.title}>
                <CheckBox checked={completed} onClick={onCompleteTodo} />
                <strong onClick={onCompleteTodo}>{text}</strong>
            </div>
            <div className={styles.actions}>
                <PenIcon className={styles.pen} />
                <TrashIcon className={styles.trash} />
            </div>
        </li>
    );
};
