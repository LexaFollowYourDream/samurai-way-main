export type PostsType = {
    id: number,
    message: string,
    like: number
}


/*
export type ProfileContacts = {
    facebook: string
    website: string|null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink:string| null
}
export type ProfileType = {
    userId: number,
    aboutMe: string,
    contacts: ProfileContacts,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    photos: { small:  string, large: string }
}
*/



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
    profile:  ProfileType |null
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
    isFetching: boolean
}


// Tипы данных  users-reducer

