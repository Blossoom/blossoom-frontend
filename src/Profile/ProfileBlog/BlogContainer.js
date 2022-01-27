import React from 'react';
import "./BlogContainer.css"
import { Container, Row } from 'react-bootstrap'
import BlogComponent from './BlogComponent';
function BlogContainer(){
    return (
        <Container>
            <Row className='justify-content-center'>
        
                <BlogComponent Title='Hello world' Paragraph='This a test' Tags={["Test", "Testing"]}/>
                <BlogComponent Title='Hello Again' Paragraph='Still testing :D' Tags={["Test", "Testing"]}/>
            </Row>
         </Container>
    )
}

export default BlogContainer;
