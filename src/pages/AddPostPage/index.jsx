import React from 'react';
import { useDispatch } from 'react-redux';
import {addPostAction} from '../../store/redux/postsReducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './style.module.css'

const AddPostPage = () => {

    const dispatch = useDispatch()

    const notify = () => toast("Post added!");

    const onSubmit = (e) => {
        e.preventDefault()

        const {title, text, author_id} = e.target

        dispatch(addPostAction(title.value, text.value, author_id.value))
        
        notify()
        title.value = ''
        text.value = ''
        author_id.value = ''
    }
  
    return (
        <div className={s.page}>
            <h1 className={s.title}>Добавление нового поста</h1>
            <form className={s.form} onSubmit={onSubmit}>
                <div className={s.inputs}>
                    <input className={s.input_text} type="text" name='title' placeholder='Заголовок'/>
                    <input className={s.input_text} type="text" name='author_id' placeholder='ID Автора' />
                    <input className={s.input_submit} type="submit" value="Добавить" />
                </div>
               
                <textarea className={s.textarea} name="text" placeholder='Текст поста'></textarea>
                
            </form>
            <ToastContainer autoClose={2000}/>
        </div>
    );
};

export default AddPostPage;