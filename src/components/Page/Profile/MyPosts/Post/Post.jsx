import React from 'react';
import s from './Post.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://www.greatcompanions.com/images/migrated/All_about_conures.jpg" alt=""/>
            <p>{props.message}</p>
            <div className={s.likes}><FontAwesomeIcon icon={faHeart}/> {props.likesCount}</div>
        </div>
    );
};

export default Post;