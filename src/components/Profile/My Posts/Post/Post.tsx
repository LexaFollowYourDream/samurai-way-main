import React from "react";
import classes from './Post.module.css'
import avatar1 from './avatar1.jpg'
import {ProfilePageType} from "../../../../redux/state";


export type ProfilePropsPageType = {
    posts: ProfilePageType
}

export const Post = (props: ProfilePropsPageType) => {
    return (
        <ul>
            {
                props.posts.posts.map(el => {
                    return <li key={el.id}>
                        <span> Text: {el.message}</span>
                        <div> Like: {el.like}</div>
                        <img src={avatar1} className={classes.avatar}/>
                    </li>
                })
            }

        </ul>
    )
}
