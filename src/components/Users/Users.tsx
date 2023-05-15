import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png.png";
import {UserPageType} from "../../type/type";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UsersFunType = {
    usersPage: UserPageType,
    onPageChanged: (pageNumber: number) => void,
    follow: (userId: number) => any,
    unfollow: (userId: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    followingInProgress: (isFetching: boolean, Userid: number) => void
}

export const Users = (props: UsersFunType) => {

    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                <div className={classes.number}>
                    {pages.map(p => {
                        return <span key={p}
                                     className={props.usersPage.currentPage === p ? classes.selectedPage : classes.page}
                                     onClick={(event) => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    })}
                </div>
                {
                    props.usersPage.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + el.id}>
                              <img src={el.photos.small != null ? el.photos.small : userPhoto}
                                   className={classes.photo}/>
                        </NavLink>

                        </div>
                        <div>
                            {el.followed
                                ? <button
                                    disabled={props.usersPage.followingInProgress.some(id => id === el.id)}
                                    className={classes.button}
                                    onClick={() => {
                                        props.unfollow(el.id)
                                    }}>UnFollow</button>


                                : <button
                                    disabled={props.usersPage.followingInProgress.some(id => id === el.id)}

                                    className={classes.button}
                                    onClick={() => {
                                        props.follow(el.id)
                                    }}>Follow</button>}

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

                        </div>
                    )
                }
            </div>
        </div>
    )
}