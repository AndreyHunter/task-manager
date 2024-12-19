import React from 'react';
import clsx from 'clsx';

import { useAppDispatch } from '../../../context/TodoProvider';

import PlusIcon from '../../../assets/images/svg/plus.svg?react';

import styles from './modalButton.module.scss';

interface ModalButtonProps {
    className: string;
}

export const ModalButton: React.FC<ModalButtonProps> = ({ className }) => {
    const combinedClasses = clsx(styles.root, className);
    const dispatch = useAppDispatch();

    const handleOpenModal = () => {
        dispatch({
            type: 'open_todo_modal',
        });
    };

    return (
        <button className={combinedClasses} onClick={handleOpenModal}>
            <PlusIcon />
        </button>
    );
};
