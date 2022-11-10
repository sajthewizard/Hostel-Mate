import React from 'react';

const ReviewViews = ({ review }) => {
    const { servicename, reviewData, _id } = review;
    const handeleDelete = id => {
        const proceed = window.confirm('Please Confirm to delete the Review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'Delete'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        return alert('Review has been Deleted');

                    }
                })


        };
    }


    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{servicename}</h2>
                <p>{reviewData}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit</button>
                    <button onClick={() => handeleDelete(_id)} className="btn btn-ghost">Delete</button>

                </div>
            </div>
        </div>
    );
};

export default ReviewViews;