import React from "react";
import axios from "axios";
import Profile from "../Profile";
import {connect} from "react-redux";
import {setUsersProfileAC} from "../../../redux/profile-reducer";
import {ProfileType} from "../../../type/type";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppRootStateType} from "../../../redux/redux-store";

type PathParamsType = {
    userId:string
}
type mapStateToPropsType = {
    profile: any | ProfileType
}
type mapDispatchToPropsType = {
    setUserProfile:(profile: ProfileType)=>void
}
type  OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfileAPIContainerPropsType =  RouteComponentProps<PathParamsType> & OwnPropsType


export class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {
    componentDidMount() {
       // debugger
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }
    render() {
        return <>
            <Profile profile = {this.props.profile}/>
        </>
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer);

let mapStateToProps = (state: AppRootStateType):mapStateToPropsType => {
    return {
        profile:state.profilePage.profile,
    }
}

export const ProfileContainer = connect(mapStateToProps,{
    setUserProfile:setUsersProfileAC
})(WithUrlDataContainerComponent)



