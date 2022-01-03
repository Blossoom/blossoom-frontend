import React from 'react';
import Header from '../Header/Header'
import './Profile.css'
import profilepic from './../assets/ProfilePicture.png'
import PostComponent from './../Post/PostComponent'
import Sidebar from './Sidebar/Sidebar'
function Profile(props){

    return(

    <div className='ProfileContainer'>
        <Header />
        <div className='profileHeader'>
            <div className='cover'>
                <img src={profilepic} className='ProfilePicture'></img>
            </div>
            <h1>Hamadi besclet</h1>
            <h4>Hamadi 9aher 9olob el 3adhara bidoun sayara B)</h4>
        </div>
        <div className='ProfileBody'>
        <Sidebar/>
        <div className='Posts'>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        </div>
        </div>
    </div>

    )
}

export default Profile;