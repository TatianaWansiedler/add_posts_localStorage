const defPosts = [
    { id: 1, title: 'Заголовок поста', text: 'Текст поста', author_id: '1'},
    { id: 2, title: 'Заголовок поста', text: 'Текст поста', author_id: '2' },
    { id: 3, title: 'Заголовок поста', text: 'Текст поста', author_id: '1' }
]

const posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : defPosts

const DELET_POST = 'DELET_POST'
const ADD_POST = 'ADD_POST'

export const removePostAction = (payload) => ({ type: DELET_POST, payload })

export const addPostAction = (title, text, author_id) => {
    return { 
        type: ADD_POST, 
        payload: {id: Date.now(), title, text, author_id}
    }
}

export const postsReducer = (state = posts, action) => {
    if (action.type === DELET_POST) {
        const newPosts = state.filter(({ id }) => id !== action.payload)
        localStorage.setItem('posts',JSON.stringify(newPosts) );
        return newPosts
    } else if(action.type === ADD_POST){
        const postsN = [...state, action.payload]
        localStorage.setItem('posts',JSON.stringify(postsN) );
        return postsN
    }
    return state
}