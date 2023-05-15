import React from "react";
import classes from "../Profile.module.css";
import {ProfileType} from "../../../type/type";
import {Preloader} from "../../common/Preloader/Preloader";


export type ProfileInfoPropsType = {
    profile: any | ProfileType,
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={classes.img}
                     src="https://storage.yandexcloud.net/moskvichmag/uploads/2022/06/lori-0032284699-a7.jpg"/>
            </div>
            <div>
                <img src={props.profile?.photos.large}/>
                <div>{props.profile.contacts?.facebook}</div>
                <div>{props.profile.contacts?.github}</div>
                <div>{props.profile.contacts?.vk}</div>
                <div>{props.profile.contacts?.twitter}</div>
                <div>{props.profile.contacts?.mainLink}</div>
                <div>{props.profile.contacts?.website}</div>
                <div>{props.profile.contacts?.youtube}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}
export default ProfileInfo