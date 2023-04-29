import React from "react";
import classes from "../../Users/Users.module.css";
import Loading from "../../../assets/images/loading.gif";

export type PropsPreloaderType = {
}

export const Preloader = (props: PropsPreloaderType) => {

    return (
            <img className={classes.Loading} src={Loading}/>
    )
}