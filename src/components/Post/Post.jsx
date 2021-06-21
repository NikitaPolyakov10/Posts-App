import React, { useState } from 'react';
import './Post.css'
import Modal from '../Modal/Modal'
import {Link} from 'react-router-dom'


function Post({title, text, user, id}) {
    const [isOpen, setIsOpen] = useState(false);
    
    const onClickPost = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <>
        <div className="post">
            <div className='post-title'>{title}</div>
            <div className='post-text'>{text}</div>
            <div className='post-author' onClick={onClickPost}>Author: <span className='post-author-name'>{user.name}</span></div>
            <Link className='post-details-link' to={`/posts/${id}/comments`}>Show Details</Link>
        </div>
        <Modal author={user} open={isOpen} close={handleClose}/>
        </>
    )
}

export default Post;