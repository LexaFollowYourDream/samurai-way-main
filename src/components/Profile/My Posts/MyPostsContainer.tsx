import React, {ChangeEvent} from "react";
//import {ActionType, ProfilePageType, StoreType} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPost} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";



export type ProfilePropsPageType = {
    store: StoreType
}


export const MyPostContainer = (props: ProfilePropsPageType) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.messageForNewPost))
    }

    const newTextChangeHandler = (newText: string) => {
        const action = changeNewTextAC(newText)
        props.store.dispatch(action);
    }

    return (
        <MyPost posts={state.profilePage.posts}
                message={state.profilePage.messageForNewPost}
                dispatch={props.store.dispatch}
                addPost={addPost}
                newTextChangeHandler={newTextChangeHandler}
        />
    )
}

