import React from "react";
import classes from "../Dialogs.module.css";
import {DialogsPagePropsType} from "../DialogItem/DialogItem";
import {MessageType} from "../../../redux/store";

type MessageTypePropsType = {
    message: MessageType[]
}


const Message = (props: MessageTypePropsType) => {
    return (
        <ul>
            {
                props.message.map(el => {
                    return <li key={el.id}>
                        <span>{el.message}</span>
                    </li>
                })
            }
        </ul>
    )

}

export default Message