import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png.png";
import {UserPageType} from "../../type/type";

type UsersFunType = {
    usersPage: UserPageType,
    onPageChanged: (pageNumber: number) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
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
                        return <span className={props.usersPage.currentPage === p ? classes.selectedPage : ""}
                                     onClick={(event) => {props.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {
                    props.usersPage.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img src={el.photos.small != null ? el.photos.small : userPhoto} className={classes.photo}/>
                        </div>
                        <div>
                            {el.followed
                                ? <button className={classes.button} onClick={() => {
                                    props.unfollow(el.id)
                                }}> Follow</button>
                                : <button className={classes.button} onClick={() => {
                                    props.follow(el.id)
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

                    </div>
                    )
                }
            </div>
        </div>
    )
}