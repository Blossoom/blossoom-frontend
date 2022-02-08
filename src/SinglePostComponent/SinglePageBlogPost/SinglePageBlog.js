import React from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const edjsHTML = require("editorjs-html");
const edjsParser = edjsHTML();


function SinglePagePost(){
const postid = useParams()
const [post, setPost] = useState(null)
const [err, setErr] = useState(null)
const access_token = localStorage.getItem('access_token')

useEffect(() => {
    axios.get(`https://blossoom-api.herokuapp.com/api/v1/articles/${postid.Postid}/`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
        .then(res => {
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
            setErr(err)
        })
}, [])


if(post){
    return(
        <Container fluid className='bg-transparent my-3'>
            <Container className='bg-white p-3'>
                <h1>{post.title}</h1>
                <p>{post.preview_content}</p>
                <div dangerouslySetInnerHTML={{__html: edjsParser.parse(JSON.parse(post.content))}}></div>
             </Container>
    </Container>
    )
}
else{
    return(
        <Container>
            <h1>Loading...</h1>
        </Container>
    )
}
}


    

export default SinglePagePost
