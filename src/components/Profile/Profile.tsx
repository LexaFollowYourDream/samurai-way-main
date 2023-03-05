import React from "react";
import classes from './Profile.module.css'
import {MyPost} from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeNewTextCallback,ProfilePageType} from "../../redux/state";


export type ProfilePropsPageType = {
    posts:ProfilePageType
    addPostCallback:(postText:string)=>void
    message:string
    changeNewTextCallback:(newText:string)=>void
}


const Profile = (props:ProfilePropsPageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost  posts = {props.posts}
                     addPostCallback ={props.addPostCallback}
                     message ={props.message}
                     changeNewTextCallback={changeNewTextCallback}

            />
        </div>
    );
}

export default Profile;