import React from 'react';
import { Card, Col, Row, Container,Button } from 'react-bootstrap'
import './ShopItem.css'


function ShopItem()   {
    return(
      <Card className="mx-2 my-2 ShopItem-container">
        <Card.Header className='bg-img'>
          <h1>image placeholder</h1>
          <button>s</button>
        </Card.Header>
        <Card.Body className='ItemBody'>
          <h3>test name</h3>
          <small>vendor name</small>
          <span className='Stars'>****</span>
          <div className="row">
            <h2 className='col-5'>6.5DT</h2> 
            <Button className='col-7' variant="primary">Go somewhere</Button>
          </div>
        </Card.Body>
     </Card>)}

export default ShopItem;
