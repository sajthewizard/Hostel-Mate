import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Service from '../Service/Service';

const Services = () => {
    useTitle('Services')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://hostel-mate-srver.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center font-bold text-primary '>Services</h1>
                <h3 className='text-2xl text-center font-bold text-white'>Here you will find the details about our products</h3>

            </div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-12 ml-24'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>


        </div>
    );
};

export default Services;