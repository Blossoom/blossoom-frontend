import React from 'react';
import "./PostContainer.css"
import PostComponent from './PostComponent';
function Blogs(){
    return (
        <div className='PostContainer d-flex justify-center '>
            <PostComponent Title='Hello world' Paragraph='This a test' Tags={["Test", "Testing"]}/>
            <PostComponent Title='Hello Again' Paragraph='Still testing :D' Tags={["Test", "Testing"]}/>
         </div>
    )
}

export default Blogs;