import { UserPageType, UserType} from "../type/type";
import {ActionType} from "../type/acttionType";


let initialState :UserPageType = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: "Sasha",
            status: "Сегодня понедельник",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Konstantin",
            status: "Сегодня вторник",
            location: {city: "Mogilev", country: "Belarus"}
        },
        {
            id: 3,
            followed: false,
            fullName: "Vera",
            status: "Сегодня среда",
            location: {city: "Dzyarzhynsk", country: "Belarus"}
        },
        {
            id: 4,
            followed: false,
            fullName: "Yekaterina,",
            status: "Сегодня четверг",
            location: {city: "Zaslawye", country: "Belarus"}
        },
    ]
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
            return {...state,users:action.users}
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
export const setUsersAC = ( users:Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
