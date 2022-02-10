import React from 'react';
import s from './News.module.scss';
import NewsHeader from "./NewsHeader/NewsHeader";
import NewsList from "./NewsList/NewsList";

const News = (props) => {
    return (
        <section className={s.news_page}>
            <div className={s.news_wrapper}>
                <NewsHeader />
                <NewsList news={props.newsPage.news}/>
            </div>
        </section>
    );
};

export default News;