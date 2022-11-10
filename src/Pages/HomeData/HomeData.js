import React from 'react';
import { Link, } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaStar } from 'react-icons/fa';


const HomeData = ({ service }) => {
    const { name, title, img, _id, Subscription, time, rating } = service;
    return (
        <div className="card w-96 bg-secondary shadow-xl ">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>




            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{rating} <FaStar></FaStar></div>
                </h2>
                {title.length > 100 ? <p>{title.slice(0, 100)}  ...</p>
                    : { title }}
                <div className="card-actions justify-between">
                    <Link to={`/services/${_id}`}><button className="btn btn-outline btn-accent btn-xs">Details</button></Link>

                    <div className="badge badge-outline">{time}</div>
                    <div className="badge badge-outline">{Subscription}</div>
                </div>
            </div>
        </div>
    );
};

export default HomeData;