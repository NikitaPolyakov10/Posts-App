import React, { useState, useEffect, useMemo, useContext } from "react";
import { fetchPosts } from "../../actions/async/getPosts";
import {useSelector, useDispatch} from 'react-redux'
import {ThemeContext} from '../../context/ThemeContext'
import Post from '../Post/Post'
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import SwitchButton from '../Button/SwitchButton'
import './PostsContainer.css'


function PostsContainer() {
    const [sliceCount, setSliceCount] = useState(5);

    const { storeTheme, storeToggleTheme } = useContext(ThemeContext);

    const dispatch = useDispatch();
    
    const storePosts = useSelector((state) => state.postsReducer.posts);
    const storeLoading = useSelector((state) => state.postsReducer.isLoading)
    const storeError = useSelector((state) => state.postsReducer.error)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const showMorePosts = () => {
        setSliceCount(sliceCount + 5);
    }

    const memoPosts = useMemo(() => {
       return storePosts.slice(0, sliceCount);
    }, [storePosts, sliceCount]);

    if (storeLoading) {
        return <Loader/>
    }
    if (!storeLoading && storeError) {
        return <Error/>
    }

    return (
        <div className={storeTheme === 'light' ? 'posts-container light' : 'posts-container dark'}>
            <div className="header">
                <h3 className='header-title'>Posts App</h3>
                <div className='switch-button'>
                    <SwitchButton changeTheme={storeToggleTheme}/>
                </div>
            </div>
            <div className='posts'>
            {memoPosts.map((item) => {
                return (
                    <div className='post-item' key={item.id}>
                        <Post title={item.title} text={item.body} user={item.user} id={item.id}/>
                    </div>
                )
                })}
            </div>
            <div className="footer">
                <button className='footer-button' onClick={showMorePosts}>Show More</button>
            </div>
        </div>
    )
}

export default PostsContainer;