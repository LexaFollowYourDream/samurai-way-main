import {addPostAC, changeNewTextAC, setUsersProfileAC} from "../redux/profile-reducer";
import {sendMessageAC, updateNewMessagesBodyAC} from "../redux/dialogs-reducer";
import {
    followAC,
    setCurrentPageAC, setTotalUserCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC
} from "../redux/users-reducer";

export type ActionType = ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessagesBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof setUsersProfileAC>