import React from 'react';

import { Input } from '../../molecules/input/Input';
import { Button } from '../../atoms/button/Button';

import styles from './todoModal.module.scss';

interface TodoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TodoModal: React.FC<TodoModalProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`${styles.root} ${isOpen && styles.active}`} onClick={onClose}>
            <div
                className={`${styles.content} ${isOpen && styles.active}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <div className={styles.title}>NEW NOTE</div>
                    <Input placeholder="Input your note..." />
                </div>
                <div className={styles.buttons}>
                    <Button type="transparent">CHANCEL</Button>
                    <Button>APPLY</Button>
                </div>
            </div>
        </div>
    );
};
