import React from 'react';
import { useRef } from 'react';
import styles from './search_header.module.css'

const SearchHeader = ({ onSearch , goHome}) => {
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
    <div className={styles.logo} onClick={goHome}>
        <img className={styles.img} src="https://ohtmm.github.io/react-youtube/images/logo.png" alt='youtube' /> 
        <h2 className={styles.title}>Youngtube</h2>
    </div>
    <input ref={inputRef} className={styles.input} type='search' placeholder='search...' onKeyDown={onKeyDown}/>
    <button className={styles.button} type='submit' onClick={onClick}>
        <img className={styles.buttonImg} src="https://ohtmm.github.io/react-youtube/images/search.png" alt='search-icon'/>
    </button>
    
    </header>
        
    );
};

export default SearchHeader;