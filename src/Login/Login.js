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

    // a local storage to store the user's token
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [inputState, setInput] = useState({input: {username: '', password: ''}})
    const [error, setError] = useState("None")
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
                console.log(res)
                if (res.statusCode === 200){
                    setToken(res.data.token)
                    localStorage.setItem('token', res.data.token)
                    reduxStore.dispatch({type: 'LOG', payload: {isLogged: true}})
                    if (res.data.user.is_superuser){
                        navigate('/admin')
                    }
                    navigate('/')
                }
                else{
                    setError(res.data.error)
                }
            })
            .catch(err => {
                console.log(err + 'Here')
            })
            return
    }

    

return (
    
    <Container fluid className='d-flex justify-content-center my-3 login-container'>
    <Row><img src={david} /></Row>
     
    
    <Row>
                <div className="col-md-12 login-form-1">
                            <h3>Login</h3>
                            {error === 'validateEmail'&& (<h4 className='text-center text-danger'>Validate Email</h4>)}
                            {error === 'wrongcredit'&& (<h4 className='text-center text-danger'>Check your login information</h4>)}
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