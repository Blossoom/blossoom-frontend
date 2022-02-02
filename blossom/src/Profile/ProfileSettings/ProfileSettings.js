import React from 'react';
import {Container, Card,Row} from 'react-bootstrap';
import './ProfileSettings.css'


function ProfileSettings(){

    return (
        <Container fluid>
            <h2>Settings For UserName</h2>

            <Container fluid className='d-flex justify-content-center login-container'>    
            <Row className='justify-content-center'>
                    <div className="col-md-9 login-form-1">
                                <h3>User info</h3>
                                <form>
                                    <div className="form-group">
                                    <label>Email
                                        <input type="email" className="form-control my-2" placeholder="Your Name *" />
                                    </label>
                                    </div>
                                    <label>  Display Email on profile
                                            <input type='checkbox' className='text-info' value='Display email on profile'/>
                                    </label>
        
                                    <div className="form-group my-2">
                                        <label>Username
                                        <input type="email" className="form-control my-2" placeholder="Your Username *" />
                                        </label>
                                    </div>
                                    <div className="form-group my-2">
                                        <label>Profile Picture
                                        <input type="file" className="form-control" placeholder="Your Email *" />
                                        </label>
                                    </div>
                                   
                                </form>
                    </div>
                    <div className="col-md-9 login-form-1 my-3">
                                <h3>Basic info</h3>
                                <form>
                                    <div className="form-group">
                                    <label>Website Url
                                        <input type="url" className="form-control my-2" placeholder="Your Name *" />
                                    </label>

                                    </div>
        
                                    <div className="form-group my-2">
                                        <label>Location
                                        <input type="text" className="form-control my-2" placeholder="Your Location *" />
                                        </label>
                                    </div>
                                    <div className="form-group my-2">
                                        <label> Bio
                                        <input type="text" className="form-control" placeholder="Your Bio" />
                                        </label>
                                    </div>

                                </form>
                    </div>
                    
            </Row>
            
    
    </Container>


        </Container>)
    };

export default ProfileSettings;
