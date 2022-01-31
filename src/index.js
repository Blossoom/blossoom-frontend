import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage/Homepage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from './Profile/Profile';
import SignUp from './SignUp/SignUp';
import CreateBlog from './Create/Blog/CreateBlog';
import CreateArtwork from './Create/Artwork/CreateArtwork';
import CreateShopItem from './Create/ShopItem/CreateShopItem'
import CreateEvent from './Create/Events/CreateEvent'
import Login from './Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import reduxStore from './reduxStore/reduxStore';
import { Provider } from 'react-redux';
import ProfileSettings from "./Profile/ProfileSettings/ProfileSettings";
import SinglePagePost from './SinglePostComponent/SinglePageBlogPost/SinglePagePost'
import Icebreaker from "./SignUp/IceBreaker/Icebreaker";
import PickTags from "./SignUp/IceBreaker/PickTags";
import Header from './Header/Header'
import axios from "axios";

ReactDOM.render(
        <Router>
            <Provider store={reduxStore}>
            <Header/>
            <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route exact  path='/Profile/:id' element={<Profile/>} />
            <Route path='/Create/Blog' element={<CreateBlog/>} />
            <Route path='/Create/Artwork' element={<CreateArtwork/>} />
            <Route path='/Create/ShopItem' element={<CreateShopItem/>} />
            <Route path='/Create/Event' element={<CreateEvent/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/icebreaker' element={<Icebreaker/>} />
            <Route path='/picktags' element={<PickTags/>} />
            <Route path='/Profile/Settings' element={<ProfileSettings />}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/Blog/post/:postid' element={<SinglePagePost />}/>
            </Routes>
            </Provider>
        </Router>,document.querySelector("#root"));

