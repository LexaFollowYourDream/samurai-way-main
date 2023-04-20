import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./My Posts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";


export type ProfileStoreType = {
    store: StoreType
}

const Profile = (props: ProfileStoreType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;