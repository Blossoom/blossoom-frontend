import React from 'react';
import './ShopBody.css'
import ShopItem from './../ShopItem/ShopItem'
import { Card, Col, Row, Container } from 'react-bootstrap'



function ShopBody(){
    return(
     <Container fluid className=' mx-4 my-4' >
       <Row className='mx-auto'>
           <Col>
            <ShopItem />
          </Col>
          <Col>
            <ShopItem />
          </Col>
          <Col>
            <ShopItem />
          </Col>
          <Col>
            <ShopItem />
          </Col>
          <Col>
            <ShopItem />
          </Col>
          <Col>
            <ShopItem />
          </Col>
       </Row>
    </Container>)
  }

  export default ShopBody;