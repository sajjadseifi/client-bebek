import React from 'react'
import { useAuthentication } from '../../core/context/auth.context'

export const Authenticated = ({children}) => {
   const { isLogined } = useAuthentication()
   if(isLogined )
   return <>{children}</>

   return null
}
