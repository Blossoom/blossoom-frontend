import React from 'react';
import {Container} from 'react-bootstrap';
import reduxStore from '../../reduxStore/reduxStore';

const edjsHTML = require("editorjs-html");
const edjsParser = edjsHTML();


function SinglePagePost(){

    let BlogData = reduxStore.getState().CreateBlog
    const html = edjsParser.parse(BlogData.Blocks)
    console.log(html)
    return (
        <Container>
                <h1>{reduxStore.getState().CreateBlog.Title}</h1>
                <span>{reduxStore.getState().CreateBlog.Tags.map( tag => <small>{tag} </small>)}</span>
                {html}
        </Container>
    )
}

export default SinglePagePost
