import React from 'react';
import { Link } from 'react-router-dom';
import a from "../../a.jpg"

const Header = () => {
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
                            <li tabIndex={0}>
                                <a href="/" className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a href="/">Submenu 1</a></li>
                                    <li><a href="/">Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className="rounded-full" style={{ height: '30px' }} src={a}></img>  HosTel-MatE</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>

                        <li><a href="/Blog">Blog</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">SignUp</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-active btn-ghost">Booking</button>
                </div>
            </div>

        </div>
    );
};

export default Header;