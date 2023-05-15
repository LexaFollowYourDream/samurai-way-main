import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {AuthType,} from "../../type/type";
import {getAuthUserData} from "../../redux/auth-reducer";


type HeaderAPIContainerPropsType = {
    auth: AuthType,
    getAuthUserData: () => void
}


export class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <>
            <Header
                auth={this.props.auth}
            />
        </>;
    }
}


let mapStateToProps = (state: AppRootStateType) => {
    return {
        auth: state.auth
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    getAuthUserData: getAuthUserData
})(HeaderAPIContainer)
