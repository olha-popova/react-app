import React from 'react';
import s from './DialogsHeader.module.scss';

const DialogsHeader = (props) => {
    return (
        <div className={s.header}>
            <p className={s.title}>Chat / Messages</p>
        </div>
    )
};

export default DialogsHeader;