import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Login.css'
import david from './../assets/Glitchiedavid.jpeg'
import validator from 'validator'


function Login(){

    // a local storage to store the user's token
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [inputState, setInput] = useState({input: {email: '', password: '', username: ''}})
    const [error, setError] = useState("None")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()


    function setEmail(event){
        if (!(validator.isEmail(inputState.input.email))){
            setInput({...inputState, input:{email: inputState.input.email, password: inputState.input.password, username: event.target.value}})
        }
        else {
            setInput({...inputState, input:{email: event.target.value, password: inputState.input.password, username: inputState.input.username}})
        }

    }

    function setpassword(event){
        setInput({...inputState, input:{email: inputState.input.email ,password: event.target.value}})
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
        else{
            axios.post('http://http://127.0.0.1:8000/api/v1/auth/login/')
            .then(res => {
                console.log(res)
                if (res.statusCode === 200){
                    setToken(res.data.token)
                    localStorage.setItem('token', res.data.token)
                    console.log(res.data.token)
                    setSuccess(true)
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
    <Row><img src={david} /></Row>
     
    
    <Row>
                <div className="col-md-12 login-form-1">
                            <h3>Login</h3>
                            {error === 'validateEmail'&& (<h4 className='text-center text-danger'>Validate Email</h4>)}
                            {error === 'wrongcredit'&& (<h4 className='text-center text-danger'>Check your login information</h4>)}
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email Or Username *" value={inputState.input.email} onChange={setEmail} />
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

