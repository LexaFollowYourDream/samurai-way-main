import {UserPageType, UserType} from "../type/type";
import {ActionType} from "../type/acttionType";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

let initialState: UserPageType = {
    users: [],
    pageSize: 2400,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UserPageType = initialState, action: ActionType): UserPageType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users:
                    state.users.map(user => {
                        if (user.id === action.userId) {
                            return {...user, followed: true}
                        }
                        return user
                    })
            }

        case "UNFOLLOW":
            return {
                ...state, users:
                    state.users.map(user => {
                        if (user.id === action.userId) {
                            return {...user, followed: false}
                        }
                        return user
                    })
            }

        case "SET-USERS":
            return {...state, users: action.users}

        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.count}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.Userid]
                    : state.followingInProgress.filter(id => id != action.Userid)
            }
        default:
            return state
    }
}


export const followSuccessAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}

export const unFollowSuccessAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    } as const
}
export const setTotalUserCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        count: totalUsersCount
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching: isFetching
    } as const
}

export const followingInProgressAC = (isFetching: boolean, Userid: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        Userid: Userid,
        isFetching: isFetching
    } as const
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(setUsersAC(data.items));
                dispatch(setTotalUserCountAC(data.totalCount));

            });
    }
}
export const onPageChangedThunkCreator = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPageAC(pageNumber));
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setUsersAC(data.items));
                dispatch(toggleIsFetchingAC(false));
            });
    }
}


export const follow = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true, id))
        usersAPI.followUsers(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccessAC(id))
                }
                dispatch(followingInProgressAC(false, id))
            })
    }
}


export const unFollow = (id: number) => {

    return (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true, id))
        usersAPI.unFollowUsers(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccessAC(id))
                }
                dispatch(followingInProgressAC(false, id))
            })
    }
}