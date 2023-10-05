import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const AppLayout = ({children}) => {
  return (
    <div className='flex flex-col	  h-full select-none' >
        <Header/>
        {children}
        <div style={{paddingBottom:80}}>
          <Footer/>
        </div>
    </div>
  )
}
export default AppLayout
