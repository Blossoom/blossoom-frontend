import React from 'react';
import './SignUp.css'
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import reduxStore from './../reduxStore/reduxStore'
import axios from 'axios';
import validator from 'validator'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
function SignUp(){

    let Navigate = useNavigate();
    const [inputState, setInput] = useState({input: {email: '', username: '', password: '', password_2: ''}})
    const [error, setError] = useState("None")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    
    function setEmail(event){
        setInput({...inputState, input:{email: event.target.value, password: inputState.input.password, password_2: inputState.input.password_2, username: inputState.input.username}})
    }

    function setpassword(event){
        setInput({...inputState, input:{email: inputState.input.email ,password: event.target.value, password_2: event.target.value, username: inputState.input.username}})
    }
     
    function setUserName(event){
        setInput({...inputState, input:{username: event.target.value, password: inputState.input.password , email: inputState.input.email, password_2: inputState.input.password_2}})
    }

    function handleSubmit() {
        if (!(validator.isEmail(inputState.input.email))){
            setError("Email is not valid")
            return
        }
        else if (inputState.input.password.length < 8){
            setError("Password must be at least 8 characters")
            return
        }
        else if (inputState.input.password !== inputState.input.password_2){
            setError("Passwords do not match")
        }
        else if (inputState.input.username.length < 3){
            setError("Username must be at least 3 characters")
            return
        }
        else{
            axios.post('https://blossoom-api.herokuapp.com/api/v1/auth/register', inputState.input)
            .then(res => {
                console.log(res)
                if (res.statusText === "Created"){
                    Navigate('/login')
                }
                else{
                    setError(res.data.error)
                }
            })
            .catch(err => {
                console.log(err)
            })
            return
        }
    }

return (
    
    <Container fluid className='d-flex justify-content-center my-3 login-container'>    
    <Row>
                <div className="col-md-12 login-form-1">
                            <h3>Sign Up</h3>
     
                            {error === 'Email is not valid'&& (<h4 className='text-center text-danger'>{error}</h4>)}
                            {error === 'Password must be at least 8 characters'&& (<h4 className='text-center text-danger'>{error}</h4>)}
                            {error === 'Username must be at least 3 characters'&& (<h4 className='text-center text-danger'>{error}</h4>)}
                            <form>
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" placeholder="Your Username *"  onChange={setUserName} value={inputState.input.username} />
                                </div>
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" placeholder="Your Email *" onChange={setEmail} value={inputState.input.email} />
                                </div>
                                <div className="form-group my-2">
                                    <input type="password" className="form-control" placeholder="Your Password *" value={inputState.input.password} onChange={setpassword}/>
                                    <input type="password" className="form-control" placeholder="Confirm Your Password *"/>
                                </div>
                                <input type="button" className="btnSubmit my-3 mx-auto" onClick={handleSubmit} value="Submit"/>
                            </form>
                </div>
        </Row>
    
    </Container>
 );

}

export default SignUp;