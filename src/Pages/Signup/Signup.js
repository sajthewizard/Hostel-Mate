import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../contexts/Authprovider/Authprovider';
import useTitle from '../../hooks/useTitle';
const Signup = () => {
    useTitle('Signup')

    const { createUser } = useContext(Authcontext)
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="hero  bg-base-content">
            <div className="hero-content ">


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Sign Up now!</h1>

                    </div>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="text" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <label className="label">
                        <p className='mx-auto'>Have an account? <Link to="/login" className='text-secondary'>Login!</Link></p>
                    </label>
                </div>
            </div>
        </div>
    );
};


export default Signup;