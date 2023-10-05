import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { PrivateRoute } from './components/PrivateRoute'
import { AnimatedRouting } from './components/AnimatedRouting'
import { AppLayout } from '../layouts/app/AppLayout'

export const  Routers = () => {

  return (
    <AppLayout>
      <AnimatedRouting >
        <Routes>
            <Route  path='/admin/*' Component={PrivateRoute}>
                <Route Component={AdminRoutes}/>
            </Route>
            <Route path='/auth/*' Component={AuthRoutes} />
            <Route path='/*' Component={AppRoutes} />
        </Routes>
        </AnimatedRouting>
    </AppLayout>
  )
}

export default Routers
