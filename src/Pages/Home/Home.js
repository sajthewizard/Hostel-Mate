import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import HomeData from '../HomeData/HomeData';

import User from '../Users/User';
import About from './About/About';
import Banner from './Banner/Banner';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/limservices')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About><div className='grid lg:grid-cols-3 md:grid-cols-1 gap-4 my-12'>
                {
                    services.map(service => <HomeData service={service}></HomeData>)
                }
            </div>
            <div className='flex justify-end'><button className='btn text-3xl '><Link to="/services"> see more....</Link></button></div>

            <User></User>

        </div >
    );
};

export default Home;