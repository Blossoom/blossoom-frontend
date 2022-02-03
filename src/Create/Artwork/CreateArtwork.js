import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import  { useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios';


function CreateArtwork(){

    // Post submited data to /artworks/ endpoint
    // while request still pending, show loading
    // if request is successful, show success message and redirect to profile page
    // if request is unsuccessful, show error message


    const tag = [
        { value: 'Digital_Painting', label: 'Digital Painting' },
        { value: 'vector_art', label: 'Vector art' },
        { value: 'collage_art', label: 'Collage Art' },
        { value: 'animation', label: 'Animation' },
        { value: 'sketch', label: 'Sketch' },
        { value: 'character_design', label: 'Character Design' },
    ]




    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [tags, setTags] = useState(null)
    const [artwork, setArtwork] = useState({
        title: '',
        content: '',
        mediafile: null,

    })



    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)
        setError(false)
        const tagsPost = [] 
        tags.map(tag => tagsPost.push(tag.value)) 
        console.log(typeof tagsPost)
        console.log(tagsPost)
        const formData = new FormData();
        
        formData.append('title', artwork.title);
        formData.append('content', artwork.content);
        formData.append('mediafile', artwork.mediafile);
        formData.append('tags', tagsPost);
        axios.post('https://blossoom-api.herokuapp.com/api/v1/artworks/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(res => {
            if (res.status === 201){
                setLoading(false)
                setSuccess(true)
                setArtwork({
                    title: '',
                    content: '',
                    mediafile: null,

                })

                window.location.href = '/profile/' + localStorage.getItem('profile_id')
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





    const handleChange = (e) => {
        if (e.target.name === 'mediafile'){
        setArtwork({
                ...artwork,
                mediafile: e.target.files[0]
            })
            
            
        
        }
        
            
        
        else {
        setArtwork({
            ...artwork,
            [e.target.name]: e.target.value
        })
    }
    }




    // on react select change, insert value to tags state





    return (
        <Container fluid className='bg-white'>
           
           <Container className='bg-white my-4 justify-content-center'>

                <form onSubmit={handleSubmit} className='mx-auto' style={{maxWidth:'45rem'}}>
                    <div className='form-group '>
                        <label htmlFor='title'>Title
                        <input style={{maxWidth:'25rem'}} type='text' className='form-control mx-auto' id='title' name='title' value={artwork.title} onChange={handleChange}/>
                        </label>
                    </div>

                    <div className='form-group'>
                        
                               <Select
                               isMulti
                               isSearchable
                               name='tags'
                               placeholder='Select a tag'
                               isClearable
                                
                                onChange={setTags}
                               options={tag}
                               className="basic-multi-select my-3"
                               classNamePrefix="select"

                               />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='content'>Content</label>
                        <textarea className='form-control' id='content' name='content' value={artwork.content} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label className='mt-3' htmlFor='mediafile'>Artwork file</label>
                        <input name='mediafile'  type="file" onChange={handleChange} className="form-control my-2"  />
                    </div>
                    {/* <div className='form-group'>
                        
                        <label htmlFor='tags'>Tags</label>
                        <input type='text' className='form-control' id='tags' name='tags' value={artwork.tags} onChange={handleChange}/>
                    </div> */}
                    <Button variant='primary' className='my-3' type='submit'>Submit</Button>
                </form>

            {loading && <h1>Loading...</h1>}
            {success && <h1>Success!</h1>}
            {error && <h1>Error!</h1>}
            </Container>
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