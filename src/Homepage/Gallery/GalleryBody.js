import React from 'react';
import ArtworkComponent from './ArtworkComponent'
import Image from '../../assets/Glitchiedavid.jpeg'
import './GalleryBody.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function GalleryBody(){

    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://blossoom-api.herokuapp.com/api/v1/artworks/')
        .then(res => {
            setArtworks(res.data);
            setLoading(false);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className='gallery-body'>
            {loading ? <h1>Loading...</h1> : artworks.map(artwork => <ArtworkComponent key={artwork.id} {...artwork}/>)}
        </div>
    )
}

    
    


export default GalleryBody;
