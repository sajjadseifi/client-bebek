import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
export const  Routers = () => {
  return (
    <>
      <Routes>
          <Route path='/admin/*' Component={AdminRoutes} />
          <Route path='/auth/*' element={<AuthRoutes/>} />
          <Route path='/*' element={<AppRoutes/>} />
      </Routes>
    </>
  )
}
