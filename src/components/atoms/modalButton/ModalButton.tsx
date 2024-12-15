import React from 'react';
import clsx from 'clsx';

import PlusIcon from '../../../assets/images/svg/plus.svg?react';

import styles from './modalButton.module.scss';

export const ModalButton: React.FC<React.HTMLAttributes<HTMLElement>> = ({
    onClick,
    className,
}) => {
    const combinedClasses = clsx(styles.root, className);
    return (
        <button className={combinedClasses} onClick={onClick}>
            <PlusIcon />
        </button>
    );
};
