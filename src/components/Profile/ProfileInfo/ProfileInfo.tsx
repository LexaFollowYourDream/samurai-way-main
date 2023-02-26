import React from "react";
import classes from "../Profile.module.css";


const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img className={classes.img}
                     src="https://storage.yandexcloud.net/moskvichmag/uploads/2022/06/lori-0032284699-a7.jpg"/>
            </div>
            <div>
                ava + description
            </div>

        </div>
    )
}
export default ProfileInfo