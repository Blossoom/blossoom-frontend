import React from 'react';
import RightSideBar from './../RightSidebar/RightSidebar'
import { useState } from 'react';
import './LeftSideBar.css'
import './HomepageBody.css'
import ShopBody from './../Shop/ShopBody/ShopBody'
import GalleryBody from './../Gallery/GalleryBody'
import Blogs from './../Blogs/Post/PostContainer'
import Filter from './../Filter/Filter'
import EventBody from './../Events/EventBody/EventBody'
import TagsBody from './../Tags/TagsBody/TagsBody'
import Shopsvg from './../../assets/icons/svg/fi-rr-shopping-bag.svg'
import Gallerysvg from './../../assets/icons/svg/fi-rr-gallery.svg'
import Blogsvg from './../../assets/icons/svg/fi-rr-document.svg'
import EventSvg from './../../assets/icons/svg/fi-rr-calendar.svg'
import TagSvg from './../../assets/icons/svg/fi-rr-hastag.svg'

import {Container, Col ,Row, Card, ListGroup, ListGroupItem, Carousel, Navbar, Nav} from 'react-bootstrap'

function HomepageBody({props}) {
    const [state, setState] = useState('Gallery')
return(
<div className="container-fluid d-flex ">
    {/* <RightSideBar/> */}
    <Card className='LeftSideBar-container' >
        <ListGroup variant="flush">
          <ListGroup.Item className='menu-item'><h3 onClick={() => setState('Gallery')}><img className='svgicon'  src={Gallerysvg} width={'25px'}/>Gallery</h3></ListGroup.Item>
          <ListGroup.Item className='menu-item'><h3 onClick={() => setState('Blogs')}> <img className='svgicon' src={Blogsvg} width={'25px'}/> Blogs</h3></ListGroup.Item>
          <ListGroup.Item className='menu-item'><h3 onClick={() => setState('Shop')}><img className='svgicon' src={Shopsvg} width={'25px'}/>Shop</h3></ListGroup.Item>
          <ListGroup.Item className='menu-item'><h3 onClick={() => setState('Events')}><img className='svgicon' src={EventSvg} width={'25px'}/>Events</h3></ListGroup.Item>
          <ListGroup.Item className='menu-item'><h3 onClick={() => setState('Tags')}><img className='svgicon' src={TagSvg} width={'25px'}/>Tags</h3></ListGroup.Item>
        </ListGroup>
    </Card>

    <div className='Homepage-content'>
    <Filter />
        {state === "Gallery" && (<GalleryBody />)}
        {state === "Blogs" && (<Blogs />)}
        {state === "Shop" && (<ShopBody />)}
        {state === "Events" && (<EventBody />)}
        {state === "Tags" && (<TagsBody />)}
    </div>
</div>
    )}


export default HomepageBody;