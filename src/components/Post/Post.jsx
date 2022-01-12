import React from 'react';
import { Link } from "react-router-dom";

const Post = (props) => {
    return (
        <div className='post'>
            <div className='img-thumb-blog'>
                <img src="https://placeimg.com/200/150/tech" alt="" />
            </div>
            <div className='content'>
                <Link to={`detail-post/${props.data.id}`}><p className='title'>{props.data.title}</p></Link>
                <p className='body'>{props.data.body}</p>
                <button className='update' onClick={() =>props.update(props.data)}>Update</button>
                <button className='remove' onClick={() =>props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;