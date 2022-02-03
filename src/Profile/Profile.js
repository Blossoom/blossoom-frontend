import React from 'react';
import { useState } from 'react';
import './Profile.css'
import {Container,Badge , Card, Navbar, Nav, Accordion, Button} from 'react-bootstrap'
import ProfileGallery from './ProfileGallery/ProfileGallery'
import BlogContainer from './ProfileBlog/BlogContainer'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import reduxStore from '../reduxStore/reduxStore';

function Profile(props){
  const [state, setState] = useState('Gallery');
  const [isFollowing, setIsFollowing] = useState(false);
  const profile_id = localStorage.getItem('profile_id')
  const { id } = useParams();
  const [profile, setProfile] = useState({})
  // get redux store and console log it
  // const store = reduxStore.getState();
  // const tagz =  store.Tags.Tags;

  axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem('access_token')
      config.headers.Authorization = `Bearer ${token}`
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  
  axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response.status === 401){
        const refresh_token = localStorage.getItem('refresh_token')
        const refresh_token_payload = {
          refresh: refresh_token
        }
        axios.post('https://blossoom-api.herokuapp.com/api/v1/auth/login/refresh/', refresh_token_payload)
        .then(res => {
          localStorage.setItem('access_token', res.data.access)
          axios.interceptors.request.use(
            config => {
              const token = localStorage.getItem('access_token')
              config.headers.Authorization = `Bearer ${token}`
              return config
            },
            error => {
              return Promise.reject(error)
            }
          )
          axios.interceptors.response.use(
            response => {
              return response
            },
            error => {
              return Promise.reject(error)
            }
          )
          return axios.get(`https://blossoom-api.herokuapp.com/api/v1/users/${id}/`)
        })
        .then(res => {
          setProfile(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }
      return Promise.reject(error)
    }
  )


  
  const handleFollowProfile = (e) => {
    const token = localStorage.getItem('access_token')
    // get request to follow user on /users/:id/follow/ endpoint
    axios.get(`https://blossoom-api.herokuapp.com/api/v1/users/${id}/follow/`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      isFollowing ? setIsFollowing(false) : setIsFollowing(true)
      isFollowing ? e.target.innerText = 'Following' : e.target.innerText = 'Follow'
      
  
    }
    )
    .catch(err => {
      console.log(err)
    })
  }



  if (Object.keys(profile).length === 0){
    

  
    axios.get(`https://blossoom-api.herokuapp.com/api/v1/users/${id}/`).then(res => {
        setProfile(res.data) 
        console.log(res.data)
    })
    .catch(err => {console.log(err)})
  }



    return(

    <Container 
    style={{backgroundImage: `url(${profile.background_pic})` ,backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', height: '30vh'}}
    fluid>

        {/* <Image src={bg} style={{maxHeight: "40vh", width: '100%'}}/> */}

        <Container fluid style={{paddingTop: '11.5vh'}}

        className='profile-container bg-transparent d-flex '>
            <Card border="1"  className='bg-white mt-5' style={{width: '25rem'}}>
            <Card.Header  className='d-flex justify-content-center '>
                    <Card.Img className='rounded-circle border-light  ' style={{ width: '7rem', height: "7rem" }} variant="bottom" src={profile.profile_pic} />
          </Card.Header>
                <Card.Body>
                  <Card.Title>{profile.name}</Card.Title>
                  { profile_id !== id ? 
                  <Button  onClick={handleFollowProfile} className='btn btn-primary'>
                     {profile.is_following ? 'Unfollow' : 'Follow'}
                  </Button> : null}
                  <Card.Text>
                  username: <small className="text-muted">{profile.username}</small>
                  </Card.Text>
                  <Card.Text >Bio: <span className='text-muted'>{profile.bio}</span></Card.Text>
                  <Card.Text>
                    Location: <small className="text-muted">{profile.location}</small>
                  </Card.Text>
                  <Card.Text>
                    Member since: <small className="text-muted">{profile.joined_us}</small>
                  </Card.Text>
                
                  <Card.Text>
                  Followers: <small className="text-muted">{profile.followers_count}</small>  Following: <small className="text-muted">{profile.followings_count}</small>
                  </Card.Text>


                  
                  <Card.Text> Working on: <small className="text-muted">{profile.working_on}</small></Card.Text>
                  <Card.Text>  <small className="text-muted">{profile.collab_status}</small></Card.Text>
                  <Card.Text>  <small className="text-muted">{profile.WebsiteUrl}</small></Card.Text>
                  <Card.Link href="#">Social media icons</Card.Link>
                  <Card.Link href={profile.website_url} >Website</Card.Link>


                  <Accordion  className='mt-3' variant="flush">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Background</Accordion.Header>
                      <Accordion.Body>{profile.background === '' ? ('to insert something go to profile settings'):(profile.background)}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Collab Statues</Accordion.Header>
                      <Accordion.Body>{profile.collab_status ? ('available'):('not available')}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Intrests</Accordion.Header>
                      <Accordion.Body >
                        {
                        profile.tags ? (profile.tags.map(tag => {
                          return(
                            
                              <Badge className='mx-1'>{tag}</Badge>
                            
                          )
                        })) : ('to insert something go to Homepage and select tags')}
                        </Accordion.Body> 

                    </Accordion.Item>

                  </Accordion>

                </Card.Body>


            </Card>

            <Container  
            style={{paddingTop: '19vh', width: '100%'}}
            className='bg-transparent'>
        <Navbar >
          <Container  className="d-flex justify-content-around bg-transparent">
          <Nav>
            <Nav.Link onClick={() => setState('Gallery')} >Gallery</Nav.Link>
            <Nav.Link onClick={() => setState('Blogs')}  >Blogs</Nav.Link>
            <Nav.Link onClick={() => setState('Saved')}  >Saved</Nav.Link>

          </Nav>
          </Container>
      </Navbar>
      <Container className='d-flex'>

        <div className='bg-primary d-flex justify-content-center flex-column' >
        {state === "Gallery" && (<ProfileGallery />)}
        {state === "Blogs" && (<div><h1><BlogContainer userId={id}/></h1></div>)}
        {/* {state === "Saved" && ()} */}
        </div>
        </Container>
      </Container>

        </Container>

       
    </Container>

    )
}

export default Profile;