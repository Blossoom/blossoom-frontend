import React from 'react';
import {Container, Card,Row, Button} from 'react-bootstrap';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router';
const Icebreaker = () => {
    const [Inputstate, setInput] = useState({input: {name: '' ,bio: '',profile_pic: null ,WebsiteUrl: '', location: '', birth_date: '', background: '', working_on: '', collab_status: ''}});
    const [error, setError] = useState('');
    const access_token = localStorage.getItem('access_token')
    
    const handleChange = (e) => {
        if (e.target.name === 'profile_pic'){
            setInput({...Inputstate, input:{...Inputstate.input, profile_pic: e.target.files[0]}})
        }
        else {
            setInput({...Inputstate, input: {...Inputstate.input, [e.target.name]: e.target.value}});
        }
        
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('name', Inputstate.input.name);
        formData.append('bio', Inputstate.input.bio);
        formData.append('profile_pic', Inputstate.input.profile_pic);
        formData.append('WebsiteUrl', Inputstate.input.WebsiteUrl);
        formData.append('location', Inputstate.input.location);
        formData.append('birth_date', Inputstate.input.birth_date);
        formData.append('background', Inputstate.input.background);
        formData.append('working_on', Inputstate.input.working_on);
        formData.append('collab_status', Inputstate.input.collab_status);
        axios.patch('https://blossoom-api.herokuapp.com/api/v1/users/' + localStorage.getItem('profile_id') + '/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${access_token}`
            }
        })
        .then(res => {
            if (res.status === 200){
                setError('')
                setInput({input: {name: '', bio: '',profile_pic: null ,WebsiteUrl: '', location: '', birth_date: '', background: '', working_on: '', collab_status: ''}})
                // redirect to the home page
                window.location.href = '/picktags'
            }
            else{
                setError(res.data.error)
            }
        })
        .catch(err => {
            console.log(err)
        })
        }

    

    


  return (
      <Container fluid >
          <h2 className='text-center'>Ice Breaker</h2>
          <p className='text-center'>People can't read minds, that's what profile are made for. <br/> People can't read minds, that's what profile are made for </p>

          <Container>
              <Row className='bg-light'>
                    <div className="mx-auto col-md-9 login-form-1 my-3">
                          <h3>Basic info</h3>   
                          <form className='d-flex flex-column justify-content-center '>
                          <div className="form-group mx-auto">    
                              <label >Profile Picture
                                  <input name='profile_pic' onChange={handleChange} type="file" className="form-control my-2"  />
                              </label>
                              </div>

                          <div className="form-group mx-auto">    
                              <label > <span className='text-info'> Name</span> 
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
                                  <input onChange={handleChange} format='yyyy-mm-dd' name='birth_date' type='date' />
                              </label>
                                </div>
                                
                              <div className="form-group my-2 mx-auto">
                                  <label>Location
                                    <input onChange={handleChange}  name='location' type="text" className="form-control my-2" placeholder="Your Location *" />
                                  </label>
                              </div>
                              <div className="form-group my-2 mx-auto">
                                  <label> currently working on ?
                                  <input onChange={handleChange}  name='working_on' type="text" className="form-control" placeholder="what you up to?" />
                                  </label>
                              </div>
                              <div className="form-group my-2 mx-auto">
                                  <label> Background 
                                  <input onChange={handleChange}  name='working_on' type="text" className="form-control" placeholder="tell us about your background" />
                                  </label>
                              </div>
                              <div className="form-group my-2 mx-auto">
                                  <p> are you looking for a collab partner ?</p>
                                  <input onClick={handleChange} name='collab_status' id='yes' type="checkbox" value={'yes'} placeholder="Your Bio" />
                 
                                  <label className='mr-1' htmlFor='yes'> &#160; Yes &#160; </label>
                                  <input onClick={handleChange} name='collab_status' id='no' type="checkbox" value={'no'} placeholder="Your Bio" />
                 
                                <label className='mr-1' htmlFor='no'> &#160; No</label>
                                  
                              </div>
                              <small className='text-center'>You can update or edit settings later</small>
                              <Button onClick={handleSubmit}>Next</Button>
                          </form>
                      </div>
                </Row>
                
        </Container>
    </Container>
);
};

export default Icebreaker;
