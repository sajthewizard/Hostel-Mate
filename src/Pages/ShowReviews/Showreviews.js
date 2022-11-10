

import React, { useEffect, useState } from 'react';
import PreviousReviews from '../PreviousReviews/PreviousReviews';

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
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Review</th>
                            <th>Service Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(previousreviews => <PreviousReviews key={previousreviews._id} previousreviews={previousreviews}></PreviousReviews>)
                        }


                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default Showreviews;