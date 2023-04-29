import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setTotalUserCountAC, toggleIsFetchingAC,
    unFollowAC,
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UserPageType, UserType} from "../../type/type";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


export type UsersPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUserCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    usersPage: UserPageType
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage} & count =${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} & count =${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false)
            });
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
    follow: followAC,
    unfollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUserCount: setTotalUserCountAC,
    toggleIsFetching: toggleIsFetchingAC,
})(UsersAPIComponent)






