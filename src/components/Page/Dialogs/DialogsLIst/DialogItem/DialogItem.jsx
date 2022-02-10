import React from 'react';
import s from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    var path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <div className={s.picture}>
                    <img src={props.profilepic} alt={props.name}/>
                </div>
                <div className={s.body}>
                    <p className={s.name}>{props.name}</p>
                </div>
            </NavLink>
        </div>
    )
};

export default DialogItem;