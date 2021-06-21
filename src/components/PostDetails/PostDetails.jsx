import React, { useEffect } from 'react'
import {useParams} from "react-router-dom";
import { fetchPostsDetails } from '../../actions/async/getPostDetails';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


const PostDetails = () => {
    const { postId } = useParams();

    const dispatch = useDispatch();

    const storePostsDetails = useSelector((state) => state.postsDetailsReducer.postsDetails);
    const storePostsDetailsComments = storePostsDetails.comments || [];
    const storeLoading = useSelector((state) => state.postsDetailsReducer.isLoading)
    const storeError = useSelector((state) => state.postsDetailsReducer.error)
  
    useEffect(() => {
      dispatch(fetchPostsDetails(postId))
    }, [dispatch, postId])

    if(storeLoading) {
      return <Loader/>
    }

    if(!storeLoading && storeError) {
      return <Error/>
    }

    return (
      <>
      <div>
        <h2>Post Details</h2>
        <h3>{storePostsDetails.title}</h3>
        <div>{storePostsDetails.body}</div>
      </div>
      <div>
      <h2>Post Comments</h2>
        {storePostsDetailsComments.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <div>{item.email}</div>
              <div>{item.body}</div>
            </div>
          )
        })}
      </div>
      </>
    ) 
  }

  export default PostDetails;