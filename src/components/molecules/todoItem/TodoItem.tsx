import React from 'react';
import TickIcon from '../../../assets/images/svg/tick.svg?react';

import styles from './todoItem.module.scss';

export const TodoItem: React.FC = () => {
    const [check, setCheck] = React.useState(false);

    return (
        <li className={styles.root}>
            <div>
                <input
                    type="checkbox"
                    id="check"
                    className={styles.check}
                    checked={check}
                    onChange={() => {
                        setCheck(!check);
                    }}
                />
                <label htmlFor="check" className={styles.realCheck}>
                    <TickIcon />
                </label>
            </div>
        </li>
    );
};
