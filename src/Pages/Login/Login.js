import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../contexts/Authprovider/Authprovider';
import useTitle from '../../hooks/useTitle';



const Login = () => {
    useTitle('Login')
    const { signIn, signwithG } = useContext(Authcontext)
    const gProvider = new GoogleAuthProvider();
    const handleSignin = () => {
        signwithG(gProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.error(error)
            }
            )

    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error)
            }
            )

    }

    return (
        <div className="hero  bg-base-content">
            <div className="hero-content ">


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Login now!</h1>

                    </div>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                        <button onClick={handleSignin} className='btn btn-outline'>Login with Google  </button>
                    </form>
                    <label className="label">
                        <p className='mx-auto'>Don't have an account? <Link to="/signup" className='text-secondary'>Sign Up!</Link></p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Login;