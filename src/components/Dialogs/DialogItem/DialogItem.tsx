import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsPageType} from "../../../redux/store";

export type DialogsPagePropsType = {
    dialogs: DialogsPageType
}

const DialogsItem = (props: DialogsPagePropsType) => {
    let path = '/dialogs/' + props.dialogs.dialogs.map(el => el.name);

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>
                {
                    props.dialogs.dialogs.map(el => {

                        return <li key={el.id}>
                            <span>{el.name}</span>
                        </li>
                        })}
            </NavLink>
        </div>

    )
}


export default DialogsItem