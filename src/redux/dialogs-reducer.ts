import {DialogsPageType} from "./state";


export type updateNewMessagesBodyAT = {
    type: "UPDATE-NEW-MESSAGES-BODY",
    newMessageBody: string
}

export type sendMessageAT = {
    type: "SEND-MESSAGES",
}
export type ActionDialogsType = updateNewMessagesBodyAT | sendMessageAT


export const dialogsReducer = (state: DialogsPageType, action: ActionDialogsType): DialogsPageType => {
    if (action.type === "UPDATE-NEW-MESSAGES-BODY") {
        state.newMessageBody = action.newMessageBody;
    } else if (action.type === "SEND-MESSAGES") {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messages.push({id: 7, message: body})
    }

    return state
}

export default dialogsReducer;