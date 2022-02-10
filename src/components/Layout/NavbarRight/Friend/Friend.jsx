import React from 'react';
import s from './../NavbarRight.module.scss';

const Friend = (props) => {

    return (
        <div className={s.item}>
            <button id={props.id} title={props.name}>
                <img src={props.profilepic} alt={props.name}/>
            </button>
        </div>
    );
};

export default Friend;