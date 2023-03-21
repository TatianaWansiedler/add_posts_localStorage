import React from 'react';
import s from './style.module.css'
import { removePostAction } from '../../store/redux/postsReducer';
import { useDispatch } from 'react-redux';

const Post = ({id, title, text}) => {
    const dispatch = useDispatch()

    return (
        <div className={s.post}>
            <h3 className={s.title}>{title}</h3>
            <div className={s.text}>{text}</div>
            <button onClick={() => dispatch(removePostAction(id))} className={s.del_btn}>Удалить</button>
        </div>
    );
};

export default Post;