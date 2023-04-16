import {ActionType, DialogsPageType} from "./state";


export const dialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGES-BODY":
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }
        case "SEND-MESSAGES":
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            }

        default:
            return state
    }

}
