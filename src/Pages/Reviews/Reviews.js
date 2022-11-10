import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../contexts/Authprovider/Authprovider';

const Reviews = ({ data }) => {
    const { name, _id } = data;



    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const namee = `${form.firstname.value} ${form.lastname.value}`;
        const email = user?.email;
        const reviewData = form.review.value;
        const URL = user?.photoURL;

        const update = {
            service: _id,
            servicename: name,
            CustomerName: namee,
            email,
            reviewData,
            URL



        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)


        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    alert('Review added')
                    console.log(data)
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }
    const { user } = useContext(Authcontext)
    return (
        <div className='mb-12'>
            <form onSubmit={handleReview}>
                <h2 className='text-3xl text-center text-primary mb-12'>Add a Review</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstname" type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name="lastname" type="text" placeholder="Last Name" className="input input-bordered w-full " />
                    <input name="URL" type="photoURL" placeholder="Your photoURL" className="input input-bordered w-full " />
                    <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />

                </div>
                <textarea name="review" className="textarea textarea-bordered h-24 my-8 w-full" placeholder="Your Review"> </textarea>
                <span>
                    {
                        user ? (<input className='btn mx-auto mb-8' type="submit" value="Add Review" />)
                            : <>
                                <Link className="  text-2xl" to="/login">Please Login to add Review!</Link></>
                    }

                </span>



            </form>

        </div>
    );
};

export default Reviews;