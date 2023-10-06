import React from 'react'
import { useAuthentication } from '../../core/context/auth.context'

export const AccessAdmin = ({children=<></>,show=true}) => {
   const {isLogined,access_mode} = useAuthentication()
   
   if (show && isLogined && access_mode ) 
   {
      return <>{children}</>
   }

   return <></>
}
