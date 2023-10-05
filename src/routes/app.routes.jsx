import React, { Suspense, lazy } from 'react'
import { Navigate, Route, Routes,   } from 'react-router'
import { AppLoading } from '../components/AppLoading/AppLoading';

const Menu = lazy(() => import('../pages/Menu'));
const QrCodePage = lazy(() => import('../pages/QrCodePage'));
const AddProductPage = lazy(() => import('../pages/product/AddProductPage'));
const UpdateProductPage = lazy(() => import('../pages/product/UpdateProductPage'));
const AddCategoryPage = lazy(() => import('../pages/category/AddCategoryPage'));
const UpdateCategoryPage = lazy(() => import('../pages/category/UpdateCategoryPage'));

export const AppRoutes = () => {

   return (
      <Suspense fallback={<AppLoading/>}>
         <Routes>
            <Route   path='/qr-code' Component={QrCodePage} />
            <Route   path='/menu/:categoryId' Component={Menu} />
            <Route   path='/menu/*' Component={Menu} />
            <Route  path='/category/add' Component={AddCategoryPage} />
            <Route  path='/category/update/:categoryId' Component={UpdateCategoryPage} />
            <Route   path='/product/add' Component={AddProductPage}/>
            <Route  path='/product/update/:productId' Component={UpdateProductPage} />
            <Route   path='*' element={<Navigate to='/menu' />} />
         </Routes>
      </Suspense>
  )
}

export default AppRoutes