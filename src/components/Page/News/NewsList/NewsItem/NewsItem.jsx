import React from 'react';
import s from './NewsItem.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const NewsItem = (props) => {
    return (
        <article className={s.item}>
            <header>
                <div className={s.img_wrapper}>
                    <img src={props.profilepic} alt=""/>
                </div>
                <div className={s.post_info}>
                    <h2 className={s.name}>{props.name}</h2>
                    <h2 className={s.date}>{props.date}</h2>
                </div>
            </header>

            <div className={s.content}>
                <p>{props.message}</p>
            </div>

            <footer>
                <span className={s.likes}>
                    <FontAwesomeIcon icon={faHeart}/> {props.likesCount}
                </span>
            </footer>
        </article>
    )
};

export default NewsItem;