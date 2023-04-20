import {addPostAC, changeNewTextAC} from "../redux/profile-reducer";
import {sendMessageAC, updateNewMessagesBodyAC} from "../redux/dialogs-reducer";

export type MessageType = {
    id: number,
    message: string
}


export type DialogsType = {
    id: number,
    name: string
}

export type PostsType = {
    id: number,
    message: string,
    like: number
}

export type ProfilePageType = {
    posts: PostsType[]
    messageForNewPost: string
}


export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export type ActionType = ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessagesBodyAC>
    | ReturnType<typeof sendMessageAC>