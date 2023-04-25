import React from "react";
import {UserType} from "../../type/type";



export type UsersPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    users: Array<UserType>
}


export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {
                props.users.map((el) => <div key={el.id}>
                    <span>
                        <div>
                            <img/>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => {
                                    props.unfollow(el.id)
                                }}> Follow</button>
                                : <button onClick={() => {
                                    props.follow(el.id)
                                }}>UnFollow</button>}

                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.city}</div>
                            <div>{el.location.country}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}