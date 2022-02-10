import React from 'react';
import s from './NewsHeader.module.scss';

const NewsHeader = () => {
    return (
        <header className={s.news_header}>
            <h1>News Feed</h1>
        </header>
    );
};

export default NewsHeader;