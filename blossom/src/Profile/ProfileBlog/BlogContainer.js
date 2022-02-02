import React from 'react';
import "./BlogContainer.css"
import { Container, Row } from 'react-bootstrap'
import BlogComponent from './BlogComponent';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';



function BlogContainer(){

    const {id} = useParams()
    const currentUser_id = localStorage.getItem('profile_id')
    const access_token = localStorage.getItem('access_token')
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState([])


    
  const getBlogs = async () => {
        // if (props.userId === currentUser_id)
        // {
        const res = await axios.get(`https://blossoom-api.herokuapp.com/api/v1/articles/users/${id}`,{
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            setBlogs(res.data)
            console.log(res.data) 
            setLoading(false)
        }
        // else {
        //     console.log('malek is on it')
        //     console.log(props.userId)
        //     console.log('this userid from local storage' + currentUser_id)            
        // }
    


    useEffect(() => {
        if (loading === true){
            getBlogs()
        }
   
    }, [blogs])










    return (
        <Container>
            <Row className='justify-content-center'>

            {(blogs.length === 0 && loading === false) ? (<h1>No blogs yet!</h1>):blogs.map((blog, index) => {
                                    console.log(blog)
                            return (<BlogComponent key={index} Profile_pic={blog.user.profile_pic} username={blog.user.username} preview_content={blog.preview_content} Title={blog.title} Tags={blog.tags} PostId={blog.id} />)
                        
                    })}

            </Row>
         </Container>
    )
}

export default BlogContainer;
