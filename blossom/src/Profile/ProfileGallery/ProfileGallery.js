import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './ProfileGallery.css'
import ProfileArtworkComponent from './ProfileArtworkComponent'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';

function ProfileGallery(){

    const {id} = useParams()
    

    // get request artworks from /artworks/me/ endpoint
    // while request still pending, show loading
    // if request is successful, show artworks
    // if request is unsuccessful, show error message
    // if there's no artworks, show no artworks message


    const [loading, setLoading] = useState(true)
    const [artworks, setArtworks] = useState([])

    const getArtworks = async () => {

        const res = await axios.get(`https://blossoom-api.herokuapp.com/api/v1/artworks/users/${id}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            setArtworks(res.data)
            setLoading(false)
    }

    useEffect(() => {
        if (loading === true){
            getArtworks()
        }
        
    }, [artworks])

    return (
        <Container>
            <Row className='justify-content-center'>
                {(artworks.length === 0 && loading === false) ? (<h1>No artworks yet!</h1>):artworks.map((artwork, index) => {
                    return (

                            <ProfileArtworkComponent key={index} id={artwork.id} title={artwork.title} image={artwork.mediafile}/>

                    )
                })}
            </Row>
        </Container>

    )
}



export default ProfileGallery;
