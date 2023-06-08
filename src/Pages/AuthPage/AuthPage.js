import React from 'react';
import style from './style.module.css';
import Auth from '../../Components/Auth/Auth';
import LogoSide from '../../Components/LogoSide/LogoSide';

function AuthPage() {

    return (
     
            <div className={style.wrapper}>
                <Auth></Auth>
                <LogoSide></LogoSide>
            </div>
       
    )
}

export default AuthPage;