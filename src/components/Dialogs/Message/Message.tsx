import React from "react";
import {MessageType} from "../../../type/type";


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