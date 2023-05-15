import React from "react";
import Profile from "../Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profile-reducer";
import {ProfileType} from "../../../type/type";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppRootStateType} from "../../../redux/redux-store";


type PathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: any | ProfileType
}
type mapDispatchToPropsType = {
    getUserProfile: (userId:string) => void
}
type  OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfileAPIContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


export class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {
    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }


    render() {
        return <>
            <Profile profile={this.props.profile}/>
        </>
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer);

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    getUserProfile: getUserProfile
})(WithUrlDataContainerComponent)



