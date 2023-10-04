import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthentication } from '../../core/context/auth.context';

export const PrivateRoute = () => {
    const {isLogined,token}= useAuthentication()
    return isLogined ? <Outlet /> : <Navigate to="/auth/login" />;
}