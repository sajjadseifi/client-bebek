import React from 'react'
import { useAuthentication } from '../../core/context/auth.context'

export const AccessAdmin = ({children}) => {
   const {isLogined,access_mode} = useAuthentication()

   if(isLogined && access_mode)
   return <>{children}</>

   return null
}
