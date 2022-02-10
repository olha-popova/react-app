import React from 'react';
import s from './ChatHeader.module.scss';
import {NavLink} from "react-router-dom";

const ChatHeader = (props) => {
    return (
        <div className={s.header}>
            <p className={s.name}>Keel-billed Toucan</p>
        </div>
    )
};

export default ChatHeader;