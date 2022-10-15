import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchHeader from '../search_header/search_header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        authService.onAuthChange((user)=>{
            user && goToHome(user.id);
        });
    },[]);
    const goToHome = (userId) => {
        navigate({
            pathname: '/react-youtube/home',
            state: {id : userId}
        });
    };
    const onLogin = (evt) => {
        authService
            .login()
            .then(data => goToHome(data.user.uid));
    };

    return(
            <div className={styles.login}>
                <SearchHeader />
                <section className={styles.loginBox}>
                    <h2 className={styles.loginTit}>Login</h2>
                    <button className={styles.loginBtn} onClick={onLogin}> Google로 시작하기</button>
                </section>
            </div>

    );
}

export default Login;