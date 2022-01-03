import React from 'react';
import './LeftSideBar.css'
import {Link} from 'react-router-dom';
function LeftSideBar(){
    return(<div className='LeftSideBar-container'>
        <ul>
            <li className="l-s-item"><Link to='/shop'><h3>Shop</h3></Link></li>
            <li className="l-s-item"><h3>Shop</h3></li>
            <li className="l-s-item"><h3>Events</h3></li>
            <li className="l-s-item"><h3>Tags</h3></li>
            <li className="l-s-item"><h3>Find others</h3></li>
        </ul>
    </div>)
}

export default LeftSideBar;