import React from 'react';
import {Container, Card,Row, Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

const Icebreaker = () => {
    const [Inputstate, setInput] = useState({input: {id: localStorage.getItem('profile_id'), name: '' ,bio: '',profile_pic: '' ,WebsiteUrl: '', location: '', birth_date: '', background: '', working_on: '', collab_status: ''}});
    const [validated, setValidated] = useState(false);
    const handleChange = (e) => {
        setInput({...Inputstate, input: {...Inputstate.input, [e.target.name]: e.target.value}});
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }
          console.log(Inputstate.input);    
          setValidated(true);
        };
      

  
  

  return (
      <Container fluid >
          <h2 className='text-center'>Ice Breaker</h2>
          <p className='text-center'>People can't read minds, that's what profile are made for. <br/> People can't read minds, that's what profile are made for </p>

          <Container>
              <Row className='bg-light'>
                    <div className="mx-auto col-md-9 login-form-1 my-3">
                          <h3>Basic info</h3>   
                          <Form className='d-flex flex-column justify-content-center ' noValidate validated={validated} onSubmit={handleSubmit}>
                          <div className="form-group mx-auto">    
                              <label >Profile Picture
                                  <input name='profile_pic' type="file" className="form-control my-2" placeholder="Define yourself homan *" />
                              </label>
                              </div>

                          <div className="form-group mx-auto">    
                              <label >Name
                                  <input onChange={handleChange}  name='name' type="text" className="form-control my-2" placeholder="you're
                                   homan *" />
                              </label>
                              </div>



                          <div className="form-group mx-auto">    
                              <label >Bio
                                  <input onChange={handleChange}  name='bio' type="text" className="form-control my-2" placeholder="Define yourself homan *" />
                              </label>
                              </div>



                              <div className="form-group mx-auto">
                              <label>Website Url
                                  <input onChange={handleChange}  name='WebsiteUrl' type="url" className="form-control my-2" placeholder="if you have one share it with us *" />
                              </label>
                              </div>
                                <div className="form-group mx-auto my-3">
                                <label>Birth Date
                                  <input onChange={handleChange}  name='birth_date' onChange={(e) => console.log(e.target.value)} type='date' />
                              </label>
                                </div>
                                
                              <div className="form-group my-2 mx-auto">
                                  <label>Location
                                    <input onChange={handleChange}  name='location' type="text" className="form-control my-2" placeholder="Your Location *" />
                                  </label>
                              </div>
                              <div className="form-group my-2 mx-auto">
                                  <label> currently working on ?
                                  <input onChange={handleChange}  name='working_on' type="text" className="form-control" placeholder="Your Bio" />
                                  </label>
                              </div>
                              <div className="form-group my-2 mx-auto">
                                  <p> are you looking for a collab partner ?</p>
                                  <input onClick={handleChange} name='collab_status' id='yes' type="checkbox" value={'yes'} placeholder="Your Bio" />
                 
                                  <label className='mr-1' for='yes'> &#160; Yes &#160; </label>
                                  <input onClick={handleChange} name='collab_status' id='no' type="checkbox" value={'no'} placeholder="Your Bio" />
                 
                                <label className='mr-1' for='no'> &#160; No</label>
                                  
                              </div>
                              <small className='text-center'>You can update or edit settings later</small>
                              <Button type='submit' >Submit</Button>
                          </Form>
                      </div>
                </Row>
                
        </Container>
    </Container>
);
};

export default Icebreaker;
