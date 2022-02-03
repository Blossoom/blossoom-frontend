import React from 'react';
import Header from './../Header/Header';
import './Homepage.css'

import HomepageBody from './HomepageBody/HomepageBody'



class HomePage extends React.Component {
    
    render() {
        return(
        <div className='container-fluid bg-white' >

            <HomepageBody />
        </div>
        )
    }
}

export default HomePage;
