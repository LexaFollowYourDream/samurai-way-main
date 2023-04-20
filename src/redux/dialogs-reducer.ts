import {ActionType} from "../type/type";


type initStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Lexa'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Ilona'},
        {id: 6, name: 'Inga'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Do you have some new?'},
        {id: 5, message: 'When was the last time you went home?'},
        {id: 6, message: 'Hello!))) Very glad to see you'},
    ],
    newMessageBody: ""
}


export const dialogsReducer = (state: initStateType = initialState, action: ActionType): initStateType => {
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
                messages: [...state.messages, {id: new Date().getTime(), message: body}]
            }

        default:
            return state
    }

}


export const updateNewMessagesBodyAC = (newMessageBody: string) => {
    return {
        type: "UPDATE-NEW-MESSAGES-BODY",
        newMessageBody: newMessageBody
    } as const

}

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGES",
    } as const
}
