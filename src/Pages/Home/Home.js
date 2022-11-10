import React from 'react';
import useTitle from '../../hooks/useTitle';

import User from '../Users/User';
import About from './About/About';
import Banner from './Banner/Banner';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <User></User>

        </div>
    );
};

export default Home;