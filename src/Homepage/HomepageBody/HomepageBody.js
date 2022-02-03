import React, { useEffect } from 'react';
// import RightSideBar from './../RightSidebar/RightSidebar'
import { useState } from 'react';
import './LeftSideBar.css'
import './HomepageBody.css'
import GalleryBody from './../Gallery/GalleryBody'
import Blogs from './../Blogs/Post/PostContainer'
import Filter from './../Filter/Filter'
import EventBody from './../Events/EventBody/EventBody'
import TagsBody from './../Tags/TagsBody/TagsBody'
import Gallerysvg from './../../assets/icons/svg/fi-rr-gallery.svg'
import Blogsvg from './../../assets/icons/svg/fi-rr-document.svg'
import EventSvg from './../../assets/icons/svg/fi-rr-calendar.svg'
import TagSvg from './../../assets/icons/svg/fi-rr-hastag.svg'
import {Container, Nav, Button} from 'react-bootstrap'
import axios from 'axios';
import { useDispatch } from 'react-redux';

function HomepageBody({props}) {
    const [state, setState] = useState('Gallery')


    // get current user tags the dispatch is used to update the redux store
    const profile_id = localStorage.getItem('profile_id')
    const access_token = localStorage.getItem('access_token')
    const dispatch = useDispatch();

    useEffect(() => {

    
       axios.get(`https://blossoom-api.herokuapp.com/api/v1/users/${profile_id}/`, {
         headers: {
            Authorization: `Bearer ${access_token}`
          }
        })          
        .then(res => {
            dispatch({
                type: 'INITIAL_TAGS',
                payload: {
                  Tags: res.data.tags
                }
            })
            console.log('hello')
            console.log(res.data.tags)
        })
        .catch(err => {
            console.log(err)
        })
      }, [])
    



return(
<Container fluid className="d-flex ">
    <Container className='bg-transparent'>

<Nav variant="tabs" defaultActiveKey="Gallery">
  <Nav.Item>
    <Nav.Link  eventKey='Gallery'><h3 onClick={() => setState('Gallery')}><img className='svgicon'  src={Gallerysvg} width={'25px'}/>Gallery</h3></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='Events'><h3 onClick={() => setState('Events')}><img className='svgicon' src={EventSvg} width={'25px'}/>Events</h3></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey='Blogs'>
    <h3 onClick={() => setState('Blogs')}> <img className='svgicon' src={Blogsvg} width={'25px'}/> Blogs</h3>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="Tags">
    <h3 onClick={() => setState('Tags')}><img className='svgicon' src={TagSvg} width={'25px'}/>Tags</h3>
    </Nav.Link>
  </Nav.Item>
</Nav>
  <div className='my-2'>
<Filter />
</div>
        <Container className='d-flex bg-transparent justify-content-center'>

        {state === "Gallery" && (<GalleryBody />)}
        {state === "Blogs" && (<Blogs />)}

        {state === "Events" && (<EventBody />)}
        {state === "Tags" && (<TagsBody />)}
    </Container>
    </Container>
</Container>
    )}


export default HomepageBody;