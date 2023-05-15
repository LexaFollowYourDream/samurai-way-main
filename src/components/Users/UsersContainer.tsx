import React from "react";
import {connect} from "react-redux";
import {
    toggleIsFetchingAC,
    followingInProgressAC, getUsersThunkCreator, onPageChangedThunkCreator, follow, unFollow,
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UserPageType} from "../../type/type";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";



export type UsersPropsType = {
    follow: (userId: number) => any,
    unfollow: (userId: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    followingInProgress: (isFetching: boolean, Userid: number) => void
    getUsers: (currentPage: number, pageSize: number) => any
    onPageChangedThunkCreator: (pageNumber: number, pageSize: number) => any
    usersPage: UserPageType
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangedThunkCreator(pageNumber, this.props.usersPage.pageSize)
    }

    render() {
        return <>
            {this.props.usersPage.isFetching
                ?
                <Preloader/>
                :
                null}

            <Users
                usersPage={this.props.usersPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleIsFetching={this.props.toggleIsFetching}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}


let mapStateToProps = (state: AppRootStateType) => {
    return {
        usersPage: state.usersPage
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow: follow,
    unfollow: unFollow,
    toggleIsFetching: toggleIsFetchingAC,
    followingInProgress: followingInProgressAC,
    getUsers: getUsersThunkCreator,
    onPageChangedThunkCreator: onPageChangedThunkCreator
})(UsersAPIComponent)






