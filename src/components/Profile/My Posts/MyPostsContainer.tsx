import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPost} from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";




const mapStateToProps = (state: AppRootStateType) => {
    return {
        message: state.profilePage.messageForNewPost,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
        },

        newTextChangeHandler: (newText: string) => {
            const action = changeNewTextAC(newText)
            dispatch(action);
        }
    }
}
export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);
