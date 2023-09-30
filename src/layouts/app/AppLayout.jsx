import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const AppLayout = ({children}) => {
  return (
   <div className='flex flex-col	h-full' >
   <Header/>
      {children}
   <Footer/>
   </div>
  )
}
