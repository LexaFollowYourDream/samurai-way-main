import React from "react";
import {UserPageType, UserType} from "../../type/type";
import classes from "./Users.module.css"
import axios from "axios";
import userPhoto from '../../assets/images/user.png.png'


export type UsersPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUserCount: (totalCount: number) => void,
    usersPage: UserPageType
}

class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage} & count =${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} & count =${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={classes.number}>
                    {pages.map(p => {
                        return <span className={this.props.usersPage.currentPage === p ? classes.selectedPage : ""}
                                     onClick={(event) => {
                                         this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {
                    this.props.usersPage.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img src={el.photos.small != null ? el.photos.small : userPhoto} className={classes.photo}/>
                        </div>
                        <div>
                            {el.followed
                                ? <button className={classes.button} onClick={() => {
                                    this.props.unfollow(el.id)
                                }}> Follow</button>
                                : <button className={classes.button} onClick={() => {
                                    this.props.follow(el.id)
                                }}>UnFollow</button>}

                        </div>
                    </span>

                        <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{"el.location.city"}</div>
                            <div>{"el.location.country"}</div>
                        </span>
                    </span>

                    </div>)
                }
            </div>
        )

    }


}

export default UsersC