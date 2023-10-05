import React, { Suspense, lazy } from 'react'
import {Route, Routes} from 'react-router-dom'
import { AppLoading } from '../components/AppLoading/AppLoading';

const AnimatedRouting = lazy(() => import('./components/AnimatedRouting'));
const AppLayout = lazy(() => import('../layouts/app/AppLayout'));

const PrivateRoute = lazy(() => import('./components/PrivateRoute'));

const AdminRoutes = lazy(() => import('./admin.routes'));
const AuthRoutes = lazy(() => import('./auth.routes'));
const AppRoutes = lazy(() => import('./app.routes'));

export const  Routers = () => {

  return (
    <Suspense fallback={<AppLoading/>}>
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
    </Suspense>
  )
}

export default Routers
