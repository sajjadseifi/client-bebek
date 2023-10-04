import React from 'react'
import { Navigate, Route, Routes, useLocation,  } from 'react-router'
import { Menu } from '../pages/Menu'
import { AppLayout } from '../layouts/app/AppLayout'
import { QrCodePage } from '../pages/QrCodePage'
import { AddProductPage } from '../pages/product/AddProductPage'
import { AddCategoryPage } from '../pages/category/AddCategoryPage'
import { UpdateCategoryPage } from '../pages/category/UpdateCategoryPage'
import { UpdateProductPage } from '../pages/product/UpdateProductPage'
import { Login } from '../pages/auth/Login'
import { Logout } from '../pages/auth/Logout'

export const AppRoutes = () => {

   return (
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
  )
}
