import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../contexts/Authprovider/Authprovider';
import ReviewViews from '../ReviewViews/ReviewViews';


const Myreviews = () => {

    const { user } = useContext(Authcontext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])
    if (reviews.length === 0) {
        return <h1 className='text-5xl flex justify-center align-middle'>No reviews were added</h1>
    }

    return (


        <div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 ml-4'>
                {
                    reviews.map(review => <ReviewViews
                        key={review._id} review={review}></ReviewViews>)
                }
            </div >

        </div>




    );

};

export default Myreviews;