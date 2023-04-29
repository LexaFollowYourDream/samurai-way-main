import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType, ProfilePageType} from "../../../type/type";



export type ProfilePropsPageType = {
    posts: PostsType[],
    message: string,
    //dispatch: (action: ActionType) => void
    addPost: (newPost:string) => void,
    newTextChangeHandler: (newText: string) => void
}


export const MyPost = (props: ProfilePropsPageType) => {


    let addPost = () => {
        //props.dispatch(addPostAC(props.message))
        props.addPost(props.message)
    }

    const newTextChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(changeNewTextAC(e.currentTarget.value))
        const newText = event.currentTarget.value
        props.newTextChangeHandler(newText)
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


