import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='full mr-8'> <img src="https://humanyze.com/wp-content/uploads/2021/04/pexels-fauxels-3184434-min.jpg" className="max-w-sm rounded-lg shadow-2xl " /></div>

                <div className='w-1/2'>
                    <h3 className="text-5xl font-bold text-secondary ">About Us</h3>
                    <p className="py-6">After pandemic we have decided to help the students or working people in their daily life. It is really stressfull to handle the daily household wworks after a long day. So here we are to help you with our supports!</p>
                    <button className="btn btn-accent">To know more</button>
                </div>
            </div>
        </div>
    );
};

export default About;