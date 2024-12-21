import React from 'react';
import clsx from 'clsx';

import { useAppDispatch } from '../../../store/hooks';
import { openModal } from '../../../store/todoModal/todoModalActions';

import PlusIcon from '../../../assets/images/svg/plus.svg?react';

import styles from './modalButton.module.scss';

interface ModalButtonProps {
    className: string;
}

export const ModalButton: React.FC<ModalButtonProps> = ({ className }) => {
    const combinedClasses = clsx(styles.root, className);
    const dispatch = useAppDispatch();

    const handleOpenModal = () => {
        dispatch(openModal());
    };

    return (
        <button className={combinedClasses} onClick={handleOpenModal}>
            <PlusIcon />
        </button>
    );
};
