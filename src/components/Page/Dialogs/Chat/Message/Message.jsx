import React from 'react';
import s from './Message.module.scss';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div id={props.id} className={s.message}>
            <div className={s.picture}>
                <NavLink to="#">
                    <img src={props.profilepic} alt={props.name}/>
                </NavLink>
            </div>
            <div className={s.body}>
                <NavLink to="#" className={s.name}>{props.name}</NavLink>
                <p className={s.message_text}>{props.message}</p>
            </div>
        </div>
    )
};

export default Message;