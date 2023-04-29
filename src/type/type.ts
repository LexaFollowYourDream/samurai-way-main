export type PostsType = {
    id: number,
    message: string,
    like: number
}

export type ProfilePageType = {
    posts: PostsType[]
    messageForNewPost: string
}

// Tипы данных profile-reducer


export type MessageType = {
    id: number,
    message: string
}


export type DialogsType = {
    id: number,
    name: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string
}

// Tипы данных dialogs-reducer


export type UsersLocation = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    photos: { small: null | string, large: null | string },
    photoUrl: string,
    followed: boolean,
    name: string,
    status: string,
    location: UsersLocation
}


export type UserPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching:boolean
}


// Tипы данных  users-reducer

