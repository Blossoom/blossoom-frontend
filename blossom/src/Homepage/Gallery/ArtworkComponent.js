import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Card } from 'react-bootstrap'
import arrowup from './../../assets/icons/svg/fi-rr-angle-small-up.svg'
import arrowdown from './../../assets/icons/svg/fi-rr-angle-small-down.svg'
function ArtworkComponent({imgSrc}){

    return (

        <Card style={{width: '30rem'}}>
        <Card.Header className='d-flex'> 
            <div className='arrows'>
                <img src={arrowup} width={'25px'}/>
                <img src={arrowdown} width={'25px'}/>
            </div>
            <button className='profile-pic'></button>
            <h2>Author Name</h2>
        </Card.Header>
        <Card.Body className='mx-auto'>
        <h3>Artwork Title </h3>
        <div>
            <img src={imgSrc}></img>
        </div>
        <button>CMNT</button>
            <button>SV</button>
        </Card.Body>


        </Card>
        )
}

export default ArtworkComponent;