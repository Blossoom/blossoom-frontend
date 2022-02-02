import React from 'react';
import './BlogComponent.css'
import arrowup from './../../assets/icons/svg/fi-rr-angle-small-up.svg'
import arrowdown from './../../assets/icons/svg/fi-rr-angle-small-down.svg'




import { Card } from 'react-bootstrap'
function BlogComponent({username, Profile_pic,PostId, Wallpaper, Title, Tags, preview_content, timesince}){

    
    return(

            <Card className='my-3' style={{width: '40rem' }}>
        

            <Card.Header className='d-flex'>
                <div className='arrows'>
                    <img src={arrowup} width={'25px'}/>
                    <img src={arrowdown} width={'25px'}/>
                </div>
                <img src={Profile_pic} className='rounded' width='45px'></img>
                <h2>{username}</h2>       

            </Card.Header>

            
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>{preview_content} <br/> <a href='/'>read more..</a></Card.Text>
                    <Card.Text> {Tags.map(tag =>  <small className="text-muted">{"#" + tag}</small>)} {timesince}</Card.Text>
                    </Card.Body>

            <div style={{'font-size': '16px' }} className='BlogComponent-footer'> 
                <button>Comments</button>
                <button>Save</button>
            </div>
            </Card>


    )
}

export default BlogComponent;
