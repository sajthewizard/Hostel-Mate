import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../../../contexts/Authprovider/Authprovider';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(Authcontext)

    if (!user) {
        return <Navigate to="/login"></Navigate>

    } return children;

};

export default PrivateRoutes;