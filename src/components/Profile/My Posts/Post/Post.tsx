import React from "react";
import classes from './Post.module.css'
import avatar1 from './avatar1.jpg'
import {PostsType} from "../../../../type/type";



export type ProfilePropsPageType = {
    posts: PostsType[]
}

export const Post = (props: ProfilePropsPageType) => {
    return (
        <ul>
            {
                props.posts.map(el => {
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
