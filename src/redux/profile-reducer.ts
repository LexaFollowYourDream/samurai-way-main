import {PostsType, ProfilePageType} from "../type/type";
import {ActionType} from "../type/acttionType";


let initialState: ProfilePageType = {
    messageForNewPost: "",
    posts: [
        {id: 0, message: 'Hello, she didn’t do anything and rested all day, how are you?', like: 12,},
        {id: 1, message: 'Hello', like: 1},
        {id: 2, message: 'Hello how a you', like: 8,}
    ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

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

export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}

export const changeNewTextAC = (newText: string,) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

