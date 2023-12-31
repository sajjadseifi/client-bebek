import React, { useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../Error/ErrorMessage'

export const TextArea = ({name,icon,lable='',...props}) => {
  const { register } = useFormContext() 
  const ref =useRef()

   return (
      <div>

      <div className='text-green-400 my-1'>
         <label htmlFor={props.id}>{lable}</label>
         <div className="w-full  bg-green-100 rounded mt-2" onClick={()=>ref.current?.focus()}>
            <div className="w-full min-w-[200px] flex items-center justify-between">
               <textarea 
                     ref={ref} 
                     rows={3}
                     className='flex-1 bg-transparent py-2 p-3 outline-none outline-0 text-green-600' 
                     {...register(name)}
                     {...props} 
               ></textarea>
               <div className='mx-2'>{icon}</div>
            </div>
         </div>
      </div>
      <ErrorMessage name={name}/>
      </div>
  )
}
