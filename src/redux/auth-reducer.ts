import {AuthType} from "../type/type";
import {ActionType} from "../type/acttionType";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthDataAC = (id: number, email: null | string, login: null | string) => {
    return {
        type: "SET-USER-DATA",
        data: {
            id, email, login
        }
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthDataAC(id, email, login));
                }
            });
    }
}