import {UserPageType, UserType} from "../type/type";
import {ActionType} from "../type/acttionType";

let initialState: UserPageType = {
    users: [],
    pageSize: 2400,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case "TOGGLE-IS FETCHING":
            return {...state,isFetching:action.isFetching}

        default:
            return state
    }
}


export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}

export const unFollowAC = (userId: number) => {
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
        type: "TOGGLE-IS FETCHING",
        isFetching: isFetching
    } as const
}
