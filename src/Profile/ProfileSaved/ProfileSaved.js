import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from 'react';

const ProfileSaved = () => {


    useEffect(() => {
        axios.get('https://blossoom-api.herokuapp.com/api/v1/artworks/saved', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => { 
                console.log(err)
            })
    }, [])

    
  // sent a get request to /users/{id}/saved/ endpoint
  // while request still pending, show loading
  // if request is successful, show saved posts
  // if request is unsuccessful, show error message
  // if there's no saved posts, show no saved posts message

  return (
    <Container>
      <h1>Profile Saved</h1>
    </Container>
  );
};




export default ProfileSaved;
