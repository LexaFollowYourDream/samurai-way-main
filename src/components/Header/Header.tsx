import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthType} from "../../type/type";

type HeaderPropsType = {
    auth: AuthType,
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <div className={classes.block}>
                <img className={classes.img}
                     src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"/>
                <p className={classes.message}> Сообщество ценителей Грузии</p>
                <div className={classes.login}>
                    {props.auth.isAuth ? props.auth.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;