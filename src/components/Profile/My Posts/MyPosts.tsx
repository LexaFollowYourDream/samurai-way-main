import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import { ProfilePageType} from "../../../redux/state";


export type ProfilePropsPageType = {
    posts: ProfilePageType,
    addPostCallback:(postText:string)=>void
    message:string
    changeNewTextCallback:(newText:string)=>void
}


export const MyPost = (props: ProfilePropsPageType) => {



    let addPost = () => {
            props.addPostCallback(props.message)
    }

    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
      props.changeNewTextCallback(e.currentTarget.value)
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


