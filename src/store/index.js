import { combineReducers, createStore } from 'redux'
import { postsReducer } from './redux/postsReducer'

const rootReducer = combineReducers({
    posts: postsReducer
})

export const store = createStore(rootReducer)


// доп. вариант сохраниея в localStorage

// const persistedState = localStorage.getItem('posts')
//     ? JSON.parse(localStorage.getItem('posts'))
//     : {}

// export const store = createStore(rootReducer,persistedState )

// store.subscribe(() => {
//     localStorage.setItem('posts', JSON.stringify(store.getState()))
// })