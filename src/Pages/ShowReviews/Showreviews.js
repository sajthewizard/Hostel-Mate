

import React, { useEffect, useState } from 'react';

const Showreviews = ({ id }) => {
    const { _id } = id;
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?_id=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>

            <h1>total: {reviews.length}</h1>

        </div>
    );
};

export default Showreviews;