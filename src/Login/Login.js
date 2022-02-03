import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Login.css'
import david from './../assets/Glitchiedavid.jpeg'
import validator from 'validator'
import axios from 'axios';
import reduxStore from '../reduxStore/reduxStore';
function Login(){
    const abortController = new AbortController();

    // a local storage to store the user's token

    const [inputState, setInput] = useState({input: {username: '', password: ''}})
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    function setUserName(event){
            setInput({...inputState, input:{password: inputState.input.password, username: event.target.value}})
    }


    function setpassword(event){
        setInput({...inputState, input:{username: inputState.input.username ,password: event.target.value}})
    }


    function handleSubmit() {
            axios.post('https://blossoom-api.herokuapp.com/api/v1/auth/login/', inputState.input)
            .then(res => {
                if (res.status === 200){

                    localStorage.setItem('access_token', res.data.access)
                    console.log(res.data.access)
                    localStorage.setItem('refresh_token', res.data.refresh)
                    localStorage.setItem('profile_id', res.data.profile_id)
                    reduxStore.dispatch({type: 'LOG', payload: {isLogged: true}})
                    if (res.data.is_new === true){
                        console.log('new user')
                        console.log(res.data.is_new)
                        navigate('/icebreaker')
                    }
                    else{
                        navigate('/') 
                    }
                }
                else{
                    setError(res.data.error)
                }
            })
            .catch(err => {
                setError('Wrong username or password')
            })
            return function cleanup() {abortController.abort();}
    }

    

return (
    
    <Container fluid className='d-flex justify-content-center my-3 login-container'>
    <Row><img src={david} /></Row>
     
    
    <Row>
                <div className="col-md-12 login-form-1">
                            <h3>Login</h3>
                            {error && (<h4 className='text-center text-danger'>{error}</h4>)}
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Username *" value={inputState.input.username} onChange={setUserName} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your Password *"  value={inputState.input.password} onChange={setpassword}/>
                                </div>
                                    <input type="button" className="btnSubmit my-3" value="Login" onClick={handleSubmit}/>
                            </form>
                </div>
        </Row>
    
    </Container>
 );
};

export default Login;