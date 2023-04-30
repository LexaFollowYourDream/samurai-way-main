import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./My Posts/MyPostsContainer";
import {ProfileType} from "../../type/type";

export type ProfilePropsType = {
    profile: any | ProfileType,
}

const Profile = (props: ProfilePropsType) => {
    return (

        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    );
}

export default Profile;