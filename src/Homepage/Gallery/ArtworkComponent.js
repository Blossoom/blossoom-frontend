import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Card, Image } from 'react-bootstrap'
import arrowup from './../../assets/icons/svg/fi-rr-angle-small-up.svg'
import arrowdown from './../../assets/icons/svg/fi-rr-angle-small-down.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function ArtworkComponent(props){


    const [artwork, setArtwork] = useState(props.artwork);
    


    return (

        <Card className='mb-2 mt-1 ' style={{width: '30rem'}}>
        <Card.Header className='d-flex'> 
            
                <Image  style={{maxWidth: '3rem', maxHeight: '4rem', marginRight: '1rem' }}  src={props.user.profile_pic} className='rounded'/>
                <Link to={`/Profile/${props.user.id}`} ><h4>{props.user.username}</h4></Link>
                

        </Card.Header>
        
        <Card.Body className='mx-auto'>
        <Card.Title className='mx-auto'>{props.title} </Card.Title>

        <div><Link to={`/artwork/post/${props.id}`}>
            <img style={{maxWidth: '22rem'}} src={props.mediafile}></img>
            </Link>
        </div>
  
        </Card.Body>
        </Card>
        )
}

export default ArtworkComponent;