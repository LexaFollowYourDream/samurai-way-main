import {addPostAC, changeNewTextAC, setUsersProfileAC} from "../redux/profile-reducer";
import {sendMessageAC, updateNewMessagesBodyAC} from "../redux/dialogs-reducer";
import {
    followingInProgressAC, followSuccessAC,
    setCurrentPageAC, setTotalUserCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowSuccessAC
} from "../redux/users-reducer";
import {setAuthDataAC} from "../redux/auth-reducer";

export type ActionType = ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessagesBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unFollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof setUsersProfileAC>
    | ReturnType<typeof setAuthDataAC>
    | ReturnType<typeof followingInProgressAC>