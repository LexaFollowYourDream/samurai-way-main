import React from "react";
import {sendMessageAC, updateNewMessagesBodyAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

export type DialogsPagePropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsPagePropsType) => {

    let state = props.store.getState().dialogsPage;

    const onSendMessagesClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessagesChange = (newMessageBody: string) => {
        props.store.dispatch(updateNewMessagesBodyAC(newMessageBody))
    }

    return (
        <Dialogs
            updateNewMessagesBody={onNewMessagesChange}
            onSendMessagesClick={onSendMessagesClick}
            dialogsPage={state}
        />
    )
}

export default DialogsContainer;