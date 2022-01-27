import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './ProfileGallery.css'
import ProfileArtworkComponent from './ProfileArtworkComponent'
import Glitch from './../../assets/Glitch.jpeg'
import Statues from './../../assets/Statues.jpeg'



function ProfileGallery(){
    const firstPost = {image: Glitch, title: 'First Artwork' }
    const secPost = {image: Statues, title: 'First Artwork' }
    return(
        <Container>
            <Row>
                <ProfileArtworkComponent Artwork={firstPost} />
                <ProfileArtworkComponent Artwork={secPost} />
                <ProfileArtworkComponent Artwork={firstPost} />
                <ProfileArtworkComponent Artwork={secPost} />
            </Row>
        </Container>
    )
}

export default ProfileGallery;
