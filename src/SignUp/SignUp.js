import React from 'react';
import './SignUp.css'

function SignUp(){

    return(
    <div className='SignUp-container'>
        <div className='SignUp-card'>

            <form className='Personal-info'>
            <h1 className='Icebreaker'>Ice Breaker</h1>
                <label className='label-item'>
                    <p>Name:</p>
                    <input></input>
                </label>
                <label className='label-item'>
                    <p>Last Name:</p>
                    <input></input>
                </label>
                <label className='label-item'>
                    <p>Last Name:</p>
                    <input></input>
                </label>
                <label className='label-item'>
                    <p>Email:</p>
                    <input></input>
                </label>
                <label className='label-item'>
                <p>Password:</p>
                    <input></input>
                </label>

                <input type="submit" value="Submit" className='Submit-btn' />
            </form>
        </div>
        <div className='Intrests'>
            <h1>Select Intrests</h1>
        <div className='Tags'>
            <div className='Tags-row'>
                <div className='Tag'>
                    <h4>Illustration</h4>
                </div>
                <div className='Tag'>
                    <h4>Illustration</h4>
                </div>

                <div className='Tag'>
                    <h4>Illustration</h4>
                </div>
            </div>
            <div className='Tags-row'>
                <div className='Tag'>
                    <h4>Illustration</h4>
                </div>

                <div className='Tag'>
                    <h4>Illustration</h4>
                </div>
                <div className='Tag'>
                    <h4>Illustration</h4>
                </div>
            </div>         
        </div>
        <input type="submit" value="Submit" className='Submit-btn' />
        </div>
    </div>
    )

}

export default SignUp;