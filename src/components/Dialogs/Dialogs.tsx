import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../type/type";


export type DialogsPagePropsType = {
    updateNewMessagesBody: (newMessageBody: string) => void
    //onSendMessagesClick: () => void
    sendMessage:()=>void
    dialogsPage: DialogsPageType
}

const Dialogs = (props: DialogsPagePropsType) => {


     // const onSendMessagesClick = () => {
     //     props.onSendMessagesClick()
     // }

    const onSendMessagesClick = () => {
        props.sendMessage()
    }

    const onNewMessagesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = event.target.value
        props.updateNewMessagesBody(newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem dialogs={props.dialogsPage.dialogs}/>
            </div>
            <Message message={props.dialogsPage.messages}/>
            <div className={classes.Button_textarea}>
                <div>
                    <textarea className={classes.textarea}
                              placeholder={"Enter new messages"}
                              onChange={onNewMessagesChange}
                              value={props.dialogsPage.newMessageBody}
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