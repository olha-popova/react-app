import React from 'react';
import s from './Chat.module.scss';
import Message from "./Message/Message";
import ChatHeader from "./ChatHeader/ChatHeader";

const Chat = (props) => {

    let MessageElements =
        props.messages.map(message => <Message id={message.id} name={message.name} profilepic={message.profilepic}
                                               message={message.message}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage()
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={s.chat}>
            <ChatHeader/>
            <div className={s.messages}>
                {MessageElements}
            </div>
            <div className={s.send_message}>
                <input onChange={onMessageChange} className={s.form_control} ref={newMessage} value={props.newMessageText}/>
                <button className={s.btn} onClick={addMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;