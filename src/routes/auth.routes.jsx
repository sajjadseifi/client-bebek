import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router'
import { AppLoading } from '../components/AppLoading/AppLoading';

const AuthLayout = lazy(() => import('../layouts/auth/AuthLayout'));
const Logout = lazy(() => import('../pages/auth/Logout'));
const Login = lazy(() => import('../pages/auth/Login'));

export const AuthRoutes = () => {
  return (
    <Suspense fallback={<AppLoading/>}>
      <AuthLayout>
        <Routes>
          <Route path='/login' Component={Login}/>
          <Route path='/logout' Component={Logout}/>
        </Routes>
      </AuthLayout>
    </Suspense>
  )
}


export default AuthRoutes