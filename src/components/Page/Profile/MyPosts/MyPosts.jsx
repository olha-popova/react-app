import React from 'react';
import s from './MyPosts.module.scss';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.posts_wrapper}>
            <p className={s.h1}>Add post</p>

            <div className={s.post_new}>
                <textarea onChange={onPostChange} ref={newPostElement} className={s.form_control} value={props.newPostText}/>
                <button className={s.btn} onClick={addPost}>Add post</button>
            </div>

            <p className={s.h1}>My posts</p>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;