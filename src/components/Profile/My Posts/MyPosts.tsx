import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionType, ProfilePageType} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";


export type ProfilePropsPageType = {
    posts: ProfilePageType,
    message: string
    dispatch: (action: ActionType) => void
}


export const MyPost = (props: ProfilePropsPageType) => {

    let addPost = () => {
        props.dispatch(addPostAC(props.message))
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }

    return (
        <div>
            <h4>My Post</h4>
            <div className={classes.postsBloc}>
                <textarea
                    className={classes.textarea}
                    value={props.message}
                    onChange={newTextChangeHandler}
                >
                </textarea>

                <button className={classes.btn} onClick={addPost}>Add post
                </button>
            </div>
            <div className={classes.posts}>
                <Post posts={props.posts}/>
            </div>
        </div>
    )
}


