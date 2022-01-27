import React from 'react';
import { useState } from 'react';
import './Profile.css'
import profilepic from './../assets/ProfilePicture.png'
import PostComponent from './../Homepage/Blogs/Post/PostComponent'
import {Container, Col ,Row, Card, ListGroup, ListGroupItem, Carousel, Navbar, Nav, Button} from 'react-bootstrap'
import Statues from './../assets/Statues.jpeg'
import Glitch from './../assets/Glitch.jpeg'
import David from './../assets/David.jpeg'
import reduxStore from './../reduxStore/reduxStore'
import { Link } from 'react-router-dom';
import ProfileGallery from './ProfileGallery/ProfileGallery'
import BlogContainer from './ProfileBlog/BlogContainer'

function Profile(props){
  const [state, setState] = useState('Gallery');


    return(

    <div className='ProfileContainer'>

        <Card.Header className='d-flex justify-content-center'>
                    <Card.Img className='rounded-circle border-light ' style={{ width: '7rem', height: "7rem" }} variant="bottom" src={Statues} />
        </Card.Header>
        <Container fluid className='bg-light d-flex justify-content-center'>
            <Card border="0" className='bg-light' style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Title>User Name</Card.Title>
                  {reduxStore.getState().Auth.isLogged == true && (<Link to='/Profile/settings'><Button> Profile settings</Button></Link>)}    
                  <Card.Text>
                    Bio: a decent artist who enjoys making art.
                  </Card.Text>
                </Card.Body>

                <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Joined on Date mm/dd/yy</ListGroupItem>
                  <ListGroupItem>Education/Work</ListGroupItem>
                </ListGroup>
                  <Card.Link href="#">Social media icons</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Container>
        <Container>
        <Navbar >
          <Container className="d-flex justify-content-around">
          <Nav>
            <Nav.Link onClick={() => setState('Gallery')} href="#home">Gallery</Nav.Link>
            <Nav.Link onClick={() => setState('Blogs')}  href="#features">Blogs</Nav.Link>
            <Nav.Link onClick={() => setState('Shop')}  href="#pricing">Shop</Nav.Link>

          </Nav>
          </Container>
      </Navbar>
      <Container className='d-flex'>
      <Card style={{ width: '18rem' }}>
            <Card.Header>About Section</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Background: Yes</ListGroup.Item>
              <ListGroup.Item>Collab status</ListGroup.Item>
              <ListGroup.Item>Intrests</ListGroup.Item>
              <ListGroup.Item>Badges</ListGroup.Item>
            </ListGroup>
      </Card>
        <div className='bg-primary d-flex justify-content-center flex-column' style={{width: '100vw'}}>
        {state === "Gallery" && (<ProfileGallery />)}
        {state === "Blogs" && (<div><h1><BlogContainer /></h1></div>)}
        {state === "Shop" && (<div><h1>Shop</h1></div>)}
        </div>
        </Container>
      </Container>
       
    </div>

    )
}

export default Profile;