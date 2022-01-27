import React from 'react';
import collage from './../../assets/collage.jpg';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PickTas = () => {
  return (
            <Container fluid >
            <h2 className='text-center'>Pick Tags</h2>
            <Container>
                <Row className='bg-light'>
                      <div className=" d-flex flex-column mx-auto col-md-12 login-form-1 mt-3">
                            <h3 className='mb-3'>Tags</h3>
                            <Row className='justify-content-around'>
                            <Card className='col-md-3'>
                                <Card.Img className="card-img-top" src={collage} />
                                <Card.Body>
                                  <Card.Title>Collage art</Card.Title>
                                  <Card.Text>
                                    Digital Collage art is fun
                                  </Card.Text>
                                  <Button variant="primary">Follow</Button>
                                </Card.Body>
                              
                            </Card>  
                            <Card className='col-md-3'>
                                <Card.Img className="card-img-top" src={collage} />
                                <Card.Body>
                                  <Card.Title>Collage art</Card.Title>
                                  <Card.Text>
                                    Digital Collage art is fun
                                  </Card.Text>
                                  <Button variant="primary">Follow</Button>
                                </Card.Body>
                              
                            </Card>
                            <Card className='col-md-3'>
                                <Card.Img className="card-img-top" src={collage} />
                                <Card.Body>
                                  <Card.Title>Collage art</Card.Title>
                                  <Card.Text>
                                    Digital Collage art is fun
                                  </Card.Text>
                                  <Button variant="primary">Follow</Button>
                                </Card.Body>
                              
                            </Card>
                            </Row>
                            <Row className='justify-content-around my-3'>
                            <Card className='col-md-3'>
                                <Card.Img className="card-img-top" src={collage} />
                                <Card.Body>
                                  <Card.Title>Collage art</Card.Title>
                                  <Card.Text>
                                    Digital Collage art is fun
                                  </Card.Text>
                                  <Button variant="primary">Follow</Button>
                                </Card.Body>
                              
                            </Card>  
                            <Card className='col-md-3'>
                                <Card.Img className="card-img-top" src={collage} />
                                <Card.Body>
                                  <Card.Title>Collage art</Card.Title>
                                  <Card.Text>
                                    Digital Collage art is fun
                                  </Card.Text>
                                  <Button variant="primary">Follow</Button>
                                </Card.Body>
                              
                            </Card>
                            <Card className='col-md-3'>
                                <Card.Img className="card-img-top" src={collage} />
                                <Card.Body>
                                  <Card.Title>Collage art</Card.Title>
                                  <Card.Text>
                                    Digital Collage art is fun
                                  </Card.Text>
                                  <Card.Text><small>15 Followers</small><small>2 Posts</small></Card.Text>
                                  <Button variant="primary">Follow</Button>
                                </Card.Body>
                              
                            </Card>
                            </Row>
                            <Link to='/login'><Button className='col-3 mx-auto align-self-center my-4'>Next</Button></Link>                     
                        </div>

                  </Row>

          </Container>
        </Container>
  );
};

export default PickTas;
