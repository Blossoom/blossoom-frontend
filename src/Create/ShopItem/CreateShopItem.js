import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';


function CreateShopItem(){
    return(
    <Container>
        <form>
            <Row>
            <label for='title'>
                Item title:
            <input type="text" id='title' />
            </label>
            <label className='col-12' htmlFor='Description'>Insert a Description for your post </label>
            <textarea className='col-12' minLength="20" id="Description" cols="30" rows="7" placeholder="Your Description"  required></textarea>
            <label for='title'>
                Tools:
            <input type="text" id='title' />
            </label>
            <label> Insert Artwork
            <input type="file" />
            </label>
            </Row>
      </form>
      <Button>Submit</Button>
    </Container>
    )
}


export default CreateShopItem;