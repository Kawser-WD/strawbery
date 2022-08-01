import React from 'react';
import Media from '../Media/Media';
import About from './About/About';
import Factory from './Factory/Factory';
import Header from './Header/Header';
import Fruits from '../Fruits/Fruits'

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Factory/>
            <Fruits/>
            <Media/>
        </div>
    );
};

export default Home;