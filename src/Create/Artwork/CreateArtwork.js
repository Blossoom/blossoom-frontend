import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import  { useState, useEffect } from 'react';
import axios from 'axios';


function CreateArtwork(){

    // Post submited data to /artworks/ endpoint
    // while request still pending, show loading
    // if request is successful, show success message and redirect to profile page
    // if request is unsuccessful, show error message

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    // const [tags, setTags] = useState([])
    const [artwork, setArtwork] = useState({
        title: '',
        content: '',
        mediafile: null,
        tags: ['animation']
    })



    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)
        setError(false)
        const formData = new FormData();
        
        formData.append('title', artwork.title);
        formData.append('content', artwork.content);
        formData.append('mediafile', artwork.mediafile);
        formData.append('tags', artwork.tags);
        axios.post('https://blossoom-api.herokuapp.com/api/v1/artworks/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(res => {
            if (res.status === 200){
                setLoading(false)
                setSuccess(true)
                setArtwork({
                    title: '',
                    content: '',
                    mediafile: null,
                    tags: ['animation']
                })
            }
            else{
                setLoading(false)
                setError(true)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }


    //     console.log(artwork)
    //     axios.post('https://blossoom-api.herokuapp.com/api/v1/artworks/', artwork, {
    //         headers: {

    //             Authorization: `Bearer ${localStorage.getItem('access_token')}`
    //         }
    //     })
    //     .then(res => {

    //         setSuccess(true)
    //         setLoading(false)
    //         // setArtwork({
    //         //     title: '',
    //         //     content: '',
    //         //     mediafile: null,
    //         //     tags: []
    //         // })
    //     })
    //     .catch(err => {
    //         console.log(artwork)
    //         setError(true)
    //         setLoading(false)
    //     })
    // }



    const handleChange = (e) => {
        if (e.target.name === 'mediafile'){
        setArtwork({
                ...artwork,
                mediafile: e.target.files[0]
            })
            console.log(artwork.mediafile)
            
        
        }
        else {
        setArtwork({
            ...artwork,
            [e.target.name]: e.target.value
        })
    }
    }



    return (
        <Container>
            <Row className='justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' className='form-control' id='title' name='title' value={artwork.title} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='content'>Content</label>
                        <textarea className='form-control' id='content' name='content' value={artwork.content} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='mediafile'>Mediafile</label>

                        <input name='mediafile'  type="file" onChange={handleChange} className="form-control my-2"  />
                        

                    </div>
                    {/* <div className='form-group'>
                        
                        <label htmlFor='tags'>Tags</label>
                        <input type='text' className='form-control' id='tags' name='tags' value={artwork.tags} onChange={handleChange}/>
                    </div> */}
                    <Button variant='primary' type='submit'>Submit</Button>
                </form>
            </Row>
            {loading && <h1>Loading...</h1>}
            {success && <h1>Success!</h1>}
            {error && <h1>Error!</h1>}
        </Container>
    )
}







//     return(
//     <Container>
//         <form>
//             <Row>
//             <label for='title'>
//                 title:
//             <input type="text" id='title' />
//             </label>
//             <label className='col-12' htmlFor='Description'>Insert a Description for your post </label>
//             <textarea className='col-12' minLength="20" id="Description" cols="30" rows="7" placeholder="Your Description"  required></textarea>
//             <label className='col-12' htmlFor='image'>Insert an image for your post </label>

//             <input id='image' type="file" />

//             </Row>
//       </form>
//       <Button>Submit</Button>
//     </Container>
//     )
// }


export default CreateArtwork;