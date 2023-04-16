import {ActionType, PostsType, ProfilePageType} from "./state";


export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                like: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                messageForNewPost: ""
            }

        case "CHANGE-NEW-TEXT":
            return {
                ...state,
                messageForNewPost: action.newText
            }

        default:
            return state
    }
}



