import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import { UsersContainer} from "./components/Users/UsersContainer";
import { ProfileContainer} from "./components/Profile/ProfileInfo/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {connect} from "react-redux";




// type PropsType = {
//     store: StoreType
// }

const App = () => {

    //const state: AppRootStateType = store.getState()
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <DialogsContainer
                />}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer
                />}/>
                <Route path="/users" render={() => <UsersContainer
                />}/>



                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends/>}/>


            </div>
        </div>
    );
}


export default App;
