import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, } from "../../redux/users-reducer";
import {AppRootStateType, store} from "../../redux/redux-store";
import {UserType} from "../../type/type";





let mapStateToProps = (state:AppRootStateType ) => {
    return {
        usersPage:state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers :(users:Array<UserType>) => {
            dispatch(setUsersAC(users))
        }

    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);