import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType, DialogsPageType,} from "../../redux/store";
import {sendMessageAC, updateNewMessagesBodyAC} from "../../redux/dialogs-reducer";

export type DialogsPagePropsType = {
    dialogs: DialogsPageType
    newMessageBody: string
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: DialogsPagePropsType) => {
    debugger

    const onSendMessagesClick = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessagesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = event.target.value
        props.dispatch(updateNewMessagesBodyAC(newMessageBody))

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem dialogs={props.dialogs}/>
            </div>
            <Message message={props.dialogs.messages}/>
            <div className={classes.Button_textarea}>
                <div>
                    <textarea className={classes.textarea}
                              placeholder={"Enter new messages"}
                              onChange={onNewMessagesChange}
                              value={props.newMessageBody}
                    >
                    </textarea>
                </div>
                <div>
                    <button className={classes.Button}
                            onClick={onSendMessagesClick}
                    >
                        Add messages
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;