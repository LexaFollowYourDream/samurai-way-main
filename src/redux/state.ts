import {renderTree} from "../renderTree";


export type MessageType = {
    id: number,
    message: string
}


export type DialogsType = {
    id: number,
    name: string
}

export type PostsType = {
    id: number,
    message: string,
    like: number

}

export type ProfilePageType = {
    posts: PostsType[]
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 0, message: 'Hello, she didn’t do anything and rested all day, how are you?', like: 12,},
            {id: 1, message: 'Hello', like: 1},
            {id: 2, message: 'Hello how a you', like: 8,},

        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimon'},
            {id: 2, name: 'Lexa'},
            {id: 3, name: 'Valera'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Ilona'},
            {id: 6, name: 'Inga'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Do you have some new?'},
            {id: 5, message: 'When was the last time you went home?'},
            {id: 6, message: 'Hello!))) Very glad to see you'},
        ]
    }
}

export const addPost = (postText: string) => {
    const newPost: PostsType = {
        id: new Date().getDate(),
        message: postText,
        like: 111110
    }
    state.profilePage.posts.unshift(newPost);
    renderTree(state)

}

export default state