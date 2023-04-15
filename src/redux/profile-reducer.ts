import {PostsType, ProfilePageType} from "./state";

export type changeNewTextAT = {
    type: "CHANGE-NEW-TEXT",
    newText: string
}

export type addPostAT = {
    type: "ADD-POST",
    postText: string
}

export type ActionProfileType = changeNewTextAT | addPostAT


export const profileReducer = (state: ProfilePageType, action:ActionProfileType ): ProfilePageType => {
    if (action.type === "ADD-POST") {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: action.postText,
            like: 111110
        }
        state.posts.unshift(newPost);
    } else if (action.type === "CHANGE-NEW-TEXT") {
        state.messageForNewPost = action.newText;
    }
    return state
}




