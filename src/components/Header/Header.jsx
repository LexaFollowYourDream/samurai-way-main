import React from "react";
import classes from './Header.module.css'

const Header = () => {
    return (<header className={classes.header}>
            <img className={classes.img}
                 src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"/>
        </header>
    );
}

export default Header;