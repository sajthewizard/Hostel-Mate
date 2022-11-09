import React from 'react';

import User from '../Users/User';
import About from './About/About';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <User></User>

        </div>
    );
};

export default Home;