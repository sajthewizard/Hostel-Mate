import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../contexts/Authprovider/Authprovider';
import a from "../../a.jpg"

const Header = () => {

    const { user, logOut } = useContext(Authcontext)
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <div className="navbar h-20 mb-4 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>

                            <li><a href="/Blog">Blog</a></li>
                            <li>
                                {
                                    user?.uid ?
                                        <>
                                            <button onClick={handleSignOut}>Signout</button>
                                            {user?.displayName}


                                        </>
                                        :
                                        <>  <Link to="login">Login</Link>

                                            <Link to="/signup">Register</Link>
                                        </>
                                }
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className="rounded-full" style={{ height: '30px' }} src={a}></img>  HosTel MatE</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-2">
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>

                        <li><a href="/Blog">Blog</a></li>
                        <li>
                            {
                                user?.uid ?
                                    <>
                                        <button onClick={handleSignOut}>Signout</button>

                                        <>  <Link to="/myreviews">My Reviews</Link>

                                            <Link to="/addservice">Add Service</Link>
                                        </>



                                    </>
                                    :
                                    <>  <Link to="login">Login</Link>

                                        <Link to="/signup">Register</Link>
                                    </>
                            }
                        </li>


                    </ul>


                </div>





                <div className="navbar-end">
                    {user?.displayName}

                </div>
            </div>


        </div>
    );
};

export default Header;