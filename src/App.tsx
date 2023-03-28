import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { StoreType} from "./redux/state";
import Friends from "./components/Friends/Friends";


type PropsType = {
    store:StoreType
}
const App = (props:PropsType) => {

const state = props.store.getState()

    return (
      //  <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogs={state.dialogsPage} //props.store._state.dialogsPage
                        newMessageBody={state.dialogsPage.newMessageBody}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path="/profile" render={() => <Profile
                        dispatch={props.store.dispatch.bind(props.store)}
                        posts={props.store._state.profilePage}
                        addPostCallback = {props.store.addPost.bind(props.store)}
                        message={props.store._state.profilePage.messageForNewPost}
                        changeNewTextCallback={props.store.changeNewTextCallback.bind(props.store)}
                    />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/friends" render={()=> <Friends/>}/>

                </div>
            </div>
       // </BrowserRouter>
    );
}


export default App;
