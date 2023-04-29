import React from "react";
import {sendMessageAC, updateNewMessagesBodyAC} from "../../redux/dialogs-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        updateNewMessagesBody: (newMessageBody: string) => {
           dispatch(updateNewMessagesBodyAC(newMessageBody))
        },
        onSendMessagesClick: () => {
            dispatch(sendMessageAC())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
