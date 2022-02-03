import React from 'react';
import './PostComponent.css'
import { Card } from 'react-bootstrap'
import arrowup from './../../../assets/icons/svg/fi-rr-angle-small-up.svg'
import arrowdown from './../../../assets/icons/svg/fi-rr-angle-small-down.svg'

function PostComponent({Author, PostId, Wallpaper, Title, Tags, Paragraph}){

    return(

            <Card className='my-3' style={{minWidth: '40rem' }}>
            <Card.Header className='d-flex'>
                <div className='arrows'>
                    <img src={arrowup} width={'25px'}/>
                    <img src={arrowdown} width={'25px'}/>
                </div>
                <button className='profile-pic'></button>
                <h2>{Title}</h2>       

            </Card.Header>
            <h6 className='PostTags'>{Tags.map(tag => "#" + tag)}<small>5 hours ago</small></h6>  
            
                <Card.Body><p>{Paragraph}<a href='#'>read more..</a></p></Card.Body>

            <div className='PostComponent-footer'> 
                <button>Comments</button>
                <button>Save</button>
            </div>
            </Card>


    )
}

export default PostComponent;
