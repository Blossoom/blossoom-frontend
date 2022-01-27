import React from 'react';
import ArtworkComponent from './ArtworkComponent'
import Image from '../../assets/Glitchiedavid.jpeg'
import './GalleryBody.css'
function GalleryBody(){
    return(<div className='GalleryBody'>
            <ArtworkComponent imgSrc={Image}/>
        </div>)
}


export default GalleryBody;
