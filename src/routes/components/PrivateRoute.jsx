import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthentication } from '../../core/context/auth.context';

export const PrivateRoute = () => {
    const {isLogined}= useAuthentication()
    return isLogined ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default PrivateRoute
