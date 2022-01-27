import React from 'react';
import {Container, Card,Row, Button} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Icebreaker = () => {

  return (
      <Container fluid >
          <h2 className='text-center'>Ice Breaker</h2>
          <Container>
              <Row className='bg-light'>
                    <div className="mx-auto col-md-9 login-form-1 my-3">
                          <h3>Basic info</h3>
                          <form className='d-flex flex-column justify-content-center '>
                              <div className="form-group mx-auto">
                              <label>Website Url
                                  <input type="url" className="form-control my-2" placeholder="Your Name *" />
                              </label>
                              </div>
                              <div className="form-group my-2 mx-auto">
                                  <label>Location
                                  <input type="text" className="form-control my-2" placeholder="Your Location *" />
                                  </label>
                              </div>
                              <div className="form-group my-2 mx-auto">
                                  <label> Bio
                                  <input type="text" className="form-control" placeholder="Your Bio" />
                                  </label>
                              </div>
                              <small className='text-center'>You can update or edit settings later</small>
                              <Link to='/signup/picktags' className='mx-auto mt-4'><Button>Next</Button></Link>
                          </form>
                      </div>
                </Row>
                
        </Container>
    </Container>
);
};

export default Icebreaker;
