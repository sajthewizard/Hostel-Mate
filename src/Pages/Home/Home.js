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
        fetch('https://hostel-mate-srver.vercel.app/limservices')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About><div className='grid lg:grid-cols-3 md:grid-cols-1 gap-4 my-12'>
                {
                    services.map(service => <HomeData key={service._id} service={service}></HomeData>)
                }
            </div>
            <div className='flex justify-end'><button className='btn text-3xl '><Link to="/services"> see more....</Link></button></div>
            <div>
                <div className="flex w-full my-24">
                    <div className="p-4 grid h-75 flex-grow card bg-base-300 rounded-box place-items-center ">
                        <h2 className='text-3xl text-secondary'>Monthly Subscriptions</h2>
                        <li>5% Discount</li>
                        <li>2 Gift Vouture from Amazon</li>
                        <li> 2 Free Meals</li>
                        <li>2 Note Books</li>
                    </div>
                    <div className="divider divider-horizontal">OR</div>
                    <div className="p-4 grid h-75 flex-grow card bg-base-300 rounded-box place-items-center"><h2 className='text-3xl text-secondary'>Yearly Subscriptions</h2>
                        <li >15% Discount</li>
                        <li>10 Gift Vouture from Amazon</li>
                        <li> 12 Free Meals</li>
                        <li>5 Discount Tour Card</li>
                    </div>
                </div>
            </div>

            <User></User>

        </div >
    );
};

export default Home;