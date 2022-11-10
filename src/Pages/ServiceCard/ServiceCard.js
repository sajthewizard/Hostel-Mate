import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaStar } from 'react-icons/fa';
import Reviews from '../Reviews/Reviews';
import Showreviews from '../ShowReviews/Showreviews';

const ServiceCard = () => {
    useTitle('Service')
    const { name, title, img, _id, Subscription, time, rating } = useLoaderData();

    const data = { name, _id };
    console.log(_id);

    return (
        <div>
            <div className="card w-96 bg-emerald-400  shadow-xl mx-auto mb-12">

                <figure> <PhotoProvider>
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
                    <p>{title}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{time}</div>
                        <div className="badge badge-outline">{Subscription}</div>
                    </div>
                </div>
            </div>
            <Showreviews id={_id}></Showreviews>
            <Reviews data={data}></Reviews>

        </div>

    );
};

export default ServiceCard;