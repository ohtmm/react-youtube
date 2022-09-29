import React from 'react';
import { useRef } from 'react';
import styles from './search_header.module.css'

const SearchHeader = ({ onSearch }) => {
    const inputRef = useRef();
    const handleSubmit = () => {
        const inputVal = inputRef.current.value;
        onSearch(inputVal);
    };
    const onKeyDown = (evt) => {
        if(evt.key === 'Enter'){
            handleSubmit();
        }
    }; 
    const onClick = () => {
        handleSubmit();
    };
    return (
    <header className={styles.header}>
    <div className={styles.logo}>
        <img className={styles.img} src="./images/logo.png" alt='youtube' /> 
        <h2 className={styles.title}>Youtube</h2>
    </div>
    <input ref={inputRef} className={styles.input} type='search' placeholder='search...' onKeyDown={onKeyDown}/>
    <button className={styles.button} type='submit' onClick={onClick}>
        <img className={styles.buttonImg} src='./images/search.png' alt='search-icon'/>
    </button>
    
    </header>
        
    );
};

export default SearchHeader;