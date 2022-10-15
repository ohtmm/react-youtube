import React from 'react';
import styles from './button.module.css';

const Button = ({name, onClick}) => (
        <button className={styles.btn} onClick={onClick}>{name}</button>
    );

export default Button;