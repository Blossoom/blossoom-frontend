import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage/Homepage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Profile from './Profile/Profile'
import SignUp from './SignUp/SignUp'

ReactDOM.render(<Router>
                    <Routes>
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/Profile' element={<Profile/>} />
                    <Route path='/signup' element={<SignUp/>} />
                    </Routes>
                </Router>,document.querySelector("#root"));

