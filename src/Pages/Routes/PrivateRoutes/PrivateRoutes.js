import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../../contexts/Authprovider/Authprovider';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(Authcontext);
    if (loading) {
        return <h1 className='text-5xl'>Loading....</h1>
    }


    if (!user) {
        return <Navigate state={{ from: location }} to="/login" replace></Navigate>

    } return children;

};

export default PrivateRoutes;