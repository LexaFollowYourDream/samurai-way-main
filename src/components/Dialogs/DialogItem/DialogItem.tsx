import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../type/type";


export type DialogsPagePropsType = {
    dialogs: DialogsType[]
}

const DialogsItem = (props: DialogsPagePropsType) => {
    let path = '/dialogs/' + props.dialogs.map(el => el.name);

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>
                {
                    props.dialogs.map(el => {

                        return <li key={el.id}>
                            <span>{el.name}</span>
                        </li>
                        })}
            </NavLink>
        </div>

    )
}


export default DialogsItem