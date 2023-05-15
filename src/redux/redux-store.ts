import {applyMiddleware, combineReducers, legacy_createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


//объединяя reducer-ы с помощью combineReducers,
//мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
})
// непосредственно создаём store (и делаем его типизацию)
export const store:StoreType = legacy_createStore(rootReducer , applyMiddleware(thunkMiddleware))

export type StoreType = Store<AppRootStateType>

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>



// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
