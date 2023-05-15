// Tипы данных profile-reducer
export type PostsType = {
    id: number,
    message: string,
    like: number
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: PostsType[]
    messageForNewPost: string
    profile: ProfileType | null
}

// Tипы данных dialogs-reducer


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
    newMessageBody: string,
}

// Tипы данных  users-reducer


export type UsersLocation = {
    city: string,
    country: string,
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
    isFetching: boolean,
    followingInProgress:Array<number>
}


// Tипы данных  auth-reducer

export type AuthType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth:boolean,
}



