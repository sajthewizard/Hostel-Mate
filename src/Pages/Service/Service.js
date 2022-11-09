import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, title, img, _id, Subscription, time, rating } = service;
    return (
        <div className="card w-96 bg-indigo-400 shadow-xl ">
            <figure><img className='w-full h-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{rating}</div>
                </h2>
                <p>{title}</p>
                <div className="card-actions justify-between">
                    <Link to={`/services/${_id}`}><button className="btn btn-outline btn-accent btn-xs">Details</button></Link>

                    <div className="badge badge-outline">{time}</div>
                    <div className="badge badge-outline">{Subscription}</div>
                </div>
            </div>
        </div>
    );
};

export default Service;