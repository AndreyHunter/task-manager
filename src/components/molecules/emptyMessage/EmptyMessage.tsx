import React from 'react';

import EmptyIcon from '../../../assets/images/svg/empty.svg?react';

import styles from './emptyMessage.module.scss';

export const EmptyMessage: React.FC = () => {
    return (
        <div className={styles.root}>
            <EmptyIcon />
            <div>Empty...</div>
        </div>
    );
};
