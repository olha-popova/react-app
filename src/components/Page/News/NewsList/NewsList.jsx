import React from 'react';
import s from './NewsList.module.scss';
import NewsItem from "./NewsItem/NewsItem";

const NewsList = (props) => {
    var NewsListElements =
        props.news.map( news => <NewsItem name={news.name}
                                          profilepic={news.profilepic}
                                          date={news.date}
                                          message={news.message}
                                          likesCount={news.likesCount}/> );

    return (
        <section className={s.news_list}>
            {NewsListElements}
        </section>
    );
};

export default NewsList;