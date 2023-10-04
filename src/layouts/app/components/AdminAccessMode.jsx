import React from 'react'
import { useAuthentication } from '../../../core/context/auth.context'
import { Switcher } from '../../../components/UI/Switch/Toggle'

export const AdminAccessMode = () => {
   const {access_mode,toggleAccess}= useAuthentication() 

   const onToggleAccess = () => {
      toggleAccess()
   }

   return (
    <div className='text-sm text-white mx-5 p-2 px-3 rounded bg-gray-700 cursor-pointer' onClick={onToggleAccess}>
      <div className='flex justify-between items-center'>
         <span className={`${access_mode?'text-sky-300':'text-red-300'}`}>
         <span>حالت ادمین </span>
         {access_mode ? "( فعال )":"( غیر فعال )"}
         </span>
         <Switcher toggle={access_mode}/>
      </div>
    </div>
  )
}
