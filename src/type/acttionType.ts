import {addPostAC, changeNewTextAC} from "../redux/profile-reducer";
import {sendMessageAC, updateNewMessagesBodyAC} from "../redux/dialogs-reducer";
import {followAC, setUsersAC, unFollowAC} from "../redux/users-reducer";

export type ActionType = ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessagesBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>