import React from 'react';
import clsx from 'clsx';

import TickIcon from '../../../assets/images/svg/tick.svg?react';

import styles from './checkBox.module.scss';

interface CheckBoxProps {
    checked: boolean;
    onClick: () => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ checked, onClick }) => {
    const combinedClasses = clsx(styles.root, { [styles.active]: checked });
    return (
        <div className={combinedClasses} onClick={onClick}>
            <TickIcon />
        </div>
    );
};
