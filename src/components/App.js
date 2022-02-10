import React from 'react';
import {Route} from "react-router-dom";
import './App.scss';
import Header from "./Layout/Header/Header";
import NavbarLeft from "./Layout/NavbarLeft/NavbarLeft";
import Profile from "./Page/Profile/Profile";
import Dialogs from "./Page/Dialogs/Dialogs";
import News from "./Page/News/News";
import Music from "./Page/Music/Music";
import Settings from "./Page/Settings/Settings";
import NavbarRight from "./Layout/NavbarRight/NavbarRight";

const App = (props) => {

    return (
        <div className="app_wrapper">
            <Header/>
            <NavbarLeft/>
            <NavbarRight state={props.state.sidebar}/>
            <div className="app_main_content">
                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profilePage}
                                              addPost={props.addPost}
                                              updateNewPostText={props.updateNewPostText}
                       />}/>
                <Route path="/dialogs"
                       render={() => <Dialogs
                           dialogsPage={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           updateNewMessageText={props.updateNewMessageText}
                       />}/>
                <Route path="/news"
                       render={() => <News
                           newsPage={props.state.newsPage}
                       />}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
};

export default App;