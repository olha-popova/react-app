import React from 'react';
import s from './Dialogs.module.scss';
import DialogsHeader from "./DialogsHeader/DialogsHeader";
import DialogsList from "./DialogsLIst/DialogsList";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <DialogsHeader/>
                <DialogsList dialogs={props.dialogsPage.dialogs}/>
                <Chat
                    messages={props.dialogsPage.messages}
                    newMessageText={props.dialogsPage.newMessageText}
                    addMessage={props.addMessage}
                    updateNewMessageText={props.updateNewMessageText}
                />
            </div>
        </div>
    );
};

export default Dialogs;