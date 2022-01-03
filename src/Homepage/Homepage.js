import React from 'react';
import Header from './../Header/Header';
import LeftSideBar from './../LeftSideBar/LeftSideBar'
import TopArtworks from '../TopArtworks/TopArtworks';
import './Homepage.css'
import RightSideBar from './../RightSidebar/RightSidebar'
import PostComponent from './../Post/PostComponent'



class HomePage extends React.Component {
    render() {
        return(
        <div className='container'>
            <Header isLogged={false}/>
            <TopArtworks />
                <div className="Homepage-container">
                    <RightSideBar/>
                    <LeftSideBar/>
                    <div className='Homepage-content'>
                    <PostComponent/>
                    </div>
                </div>
        </div>
        )
    }
}

export default HomePage;
