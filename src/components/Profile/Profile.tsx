import React from "react";
import {MyPost} from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/state";



export type ProfilePropsPageType = {
    posts:ProfilePageType
    addPostCallback:(postText:string)=>void
    message:string
    changeNewTextCallback:(newText:string)=>void
    dispatch:(action: ActionType)=>void
}


const Profile = (props:ProfilePropsPageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost  posts = {props.posts}
                     addPostCallback ={props.addPostCallback}
                     message ={props.message}
                     changeNewTextCallback={props.changeNewTextCallback}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;