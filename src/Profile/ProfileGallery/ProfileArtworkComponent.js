import React from 'react';
import {Card} from 'react-bootstrap'

function ProfileArtworkComponent( Artwork ){
    return(
        <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top"  src={Artwork.image}/>
                <Card.Body>
                    <Card.Title> <a href ={`/artwork/post/${Artwork.id}`}>{Artwork.title}</a> </Card.Title>
                </Card.Body>
        </Card>
    )
}

export default ProfileArtworkComponent;
