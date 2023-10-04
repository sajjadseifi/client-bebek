import React from 'react'
import { Route, Routes } from 'react-router'
import { Login } from '../pages/auth/Login'
import { Logout } from '../pages/auth/Logout'
import { AuthLayout } from '../layouts/auth/AuthLayout'

export const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/logout' Component={Logout}/>
      </Routes>
    </AuthLayout>
  )
}
