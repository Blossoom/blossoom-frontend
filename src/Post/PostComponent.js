import React from 'react';
import './PostComponent.css'
function PostComponent({Author, PostId, Wallpaper}){
    return(
        <div className='PostComponent'>
            <div className='PostComponent-header'>
                <button className='profile-pic'></button>
                <h2>Post Title</h2>              
            </div>
            <p>Post content lorem ipusiml it'sjdq alll fort tha gang tesst <a href='#'>read more..</a></p>
            <small>5 hours ago</small>
        </div>
    )
}

export default PostComponent;
