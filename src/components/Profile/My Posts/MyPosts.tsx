import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";


export type ProfilePropsPageType = {
    posts: ProfilePageType,
    addPostCallback:(postText:string)=>void
}


export const MyPost = (props: ProfilePropsPageType) => {

    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if( postMessageRef.current){
            props.addPostCallback(postMessageRef.current.value)
        }

    }

    return (
        <div>
            <h4>My Post</h4>
            <div className={classes.postsBloc}>
                <textarea className={classes.textarea} ref={postMessageRef}></textarea>

                <button className={classes.btn} onClick={addPost}>Add post
                </button>
            </div>
            <div className={classes.posts}>
                <Post post={props.posts}/>
            </div>
        </div>
    )
}


