import React from "react";
import {MyPost} from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";



export type ProfilePropsPageType = {
    posts:ProfilePageType
    message:string
    dispatch:(action: ActionType)=>void
}


const Profile = (props:ProfilePropsPageType) => {
debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPost  posts = {props.posts}
                     message ={props.message}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;