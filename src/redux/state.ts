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
    messageForNewPost: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType,
    changeNewTextCallback: (newText: string) => void,
    addPost: (postText: string) => void,
    _onChange: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionType) => void
}


export type ActionType = ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewMessagesBodyAC>
    | ReturnType<typeof sendMessageAC>


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

export const updateNewMessagesBodyAC = (newMessageBody: string) => {
    return {
        type: "UPDATE-NEW-MESSAGES-BODY",
        newMessageBody: newMessageBody
    } as const

}

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGES",
        //body: body,
    } as const

}


const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
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
            ],
            newMessageBody: ""
        }
    },


    changeNewTextCallback(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },
    addPost(postText: string) {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: postText,
            like: 111110
        }
        this._state.profilePage.posts.unshift(newPost);
        this._onChange()
    },
    _onChange() {
        console.log("State changed")
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                like: 111110
            }
            this._state.profilePage.posts.unshift(newPost);
            this._onChange();
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText;
            this._onChange();
        } else if (action.type === "UPDATE-NEW-MESSAGES-BODY") {
            this._state.dialogsPage.newMessageBody = action.newMessageBody;
            this._onChange();
        }else if (action.type === "SEND-MESSAGES"){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({id: 7, message: body})
            this._onChange();
        }
    }


}


export default store