import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {AppRootStateType, store, StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = {
    store: StoreType
}

const App = (props: PropsType) => {
    debugger
    const state: AppRootStateType = props.store.getState()


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <DialogsContainer
                    store={store}
                />}/>
                <Route path="/profile" render={() => <Profile
                    store={props.store}

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
