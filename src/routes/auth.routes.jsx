import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router'
import { AppLoading } from '../components/AppLoading/AppLoading';
import { SuspenseTimeout } from '../components/Suspense/SuspenseTimeout';

const AuthLayout = lazy(() => import('../layouts/auth/AuthLayout'));
const Logout = lazy(() => import('../pages/auth/Logout'));
const Login = lazy(() => import('../pages/auth/Login'));

export const AuthRoutes = () => {
  return (
    <SuspenseTimeout fallback={<AppLoading/>}>
      <AuthLayout>
        <Routes>
          <Route path='/login' Component={Login}/>
          <Route path='/logout' Component={Logout}/>
        </Routes>
      </AuthLayout>
    </SuspenseTimeout>
  )
}


export default AuthRoutes