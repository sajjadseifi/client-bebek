import React from 'react'
import { Route, Routes } from 'react-router'
import { Menu } from '../pages/Menu'
import { Link } from 'react-router-dom'
import { AppLayout } from '../layouts/app/AppLayout'

export const AppRoutes = () => {
  return (
   <AppLayout>
      <Routes>
         <Route   path='/menu/:categoryId' Component={Menu} />
         <Route   path='/menu/*' Component={Menu} />
         <Route   path='/' element={<Link className='text-white' to='/menu'>menu</Link>}/>
      </Routes>
   </AppLayout>

  )
}
