import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../Post';

const PostsContainer = () => {

    const posts = useSelector(({posts}) =>  posts)
    
    return (
        <div>
            {
                posts.map(item => <Post key={item.id} {...item}/>)
            }
        </div>
    );
};

export default PostsContainer;