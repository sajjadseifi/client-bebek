import React from 'react'
import { useFormContext } from 'react-hook-form'

export const ErrorMessage = ({name}) => {
  const { formState: { errors }  } = useFormContext() 
   const error = errors[name]
   const  message =  error && error.message ? error.message:null

   if(message)
      return <span className='py-2 text-red-400 text-xs'>{message}</span>

      return <></>
}
