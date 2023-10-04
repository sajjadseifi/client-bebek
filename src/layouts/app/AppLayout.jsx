import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { AdminAccessMode } from './components/AdminAccessMode'
import { useAuthentication } from '../../core/context/auth.context'
import { Authenticated } from '../../components/Auth/Authenticated'

export const AppLayout = ({children}) => {
  const {isLogined} = useAuthentication()
  return (
    <>
    <div className='flex flex-col	h-full  '   >
        <Header/>
        {children}
        <Footer/>
    </div>
    </>
  )
}
