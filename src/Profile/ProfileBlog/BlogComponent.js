import React from 'react';
import './BlogComponent.css'

import { Card } from 'react-bootstrap'
function BlogComponent({Author, PostId, Wallpaper, Title, Tags, Paragraph}){
    const arrowup = <svg id='Arrow-up' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg> 
    const arrowdown = <svg id='Arrow-down' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg> 

    return(

            <Card  style={{width: '40rem' }}>
        

            <Card.Header className='d-flex'>
                <div className='arrows'>
                    {arrowup}
                    {arrowdown}
                </div>
                <button className='profile-pic'></button>
                <h2>{Title}</h2>       

            </Card.Header>
            <h6 className='PostTags'>{Tags.map(tag => "#" + tag)}<small>5 hours ago</small></h6>  
            
                <Card.Body><Card.Text style={{'font-size': '16px' }}>{Paragraph}<a to='#'>read more..</a></Card.Text></Card.Body>

            <div style={{'font-size': '16px' }} className='BlogComponent-footer'> 
                <button>Comments</button>
                <button>Save</button>
            </div>
            </Card>


    )
}

export default BlogComponent;
