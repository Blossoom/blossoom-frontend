import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Card } from 'react-bootstrap'

function ArtworkComponent({imgSrc}){

    const arrowup = <svg id='Arrow-up' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg> 
    const arrowdown = <svg id='Arrow-down' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg> 

    return (

        <Card style={{width: '39rem'}}>
        <Card.Header> 
            <div className='arrows'>
                    {arrowup}
                    {arrowdown}
            </div>
            <button className='profile-pic'></button>
            <h2>Author Name</h2>
            <h3>Artwork Title </h3>
        </Card.Header>
        <div className='ArtworkBody'>
            <img src={imgSrc}></img>
        </div>

            <button>CMNT</button>
            <button>SV</button>
        </Card>
        )
}

export default ArtworkComponent;