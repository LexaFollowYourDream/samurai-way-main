import React from "react";
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

export type DialogsPagePropsType= {
    dialogs:DialogsPageType
}

const Dialogs = (props:DialogsPagePropsType) => {


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogsItem dialogs = {props.dialogs} />
            </div>
            <Message message = {props.dialogs.messages}/>
        </div>
    )
}

export default Dialogs;