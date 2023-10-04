import React, { useState } from 'react'
import { ButtonLoader } from '../../components/UI/Button/ButtonLoader'

const stylesModal = `
    fixed 
    top-0 
    left-0 
    w-full 
    h-full 
    bg-black 
    bg-opacity-10
    flex
    items-center
    justify-center
    p-5
  `

export const BaseModal = ({
   onClose,
   handler=()=>{},
   isLoading,
   title,
   description,
}) => {

  return (
   <div className={stylesModal} style={{zIndex:1000}}>
      <div className='bg-white rounded-md p-3 w-full max-w-[500px]'>
         <h1 className='text-xl'>{title}</h1>
         <p className='border-b-2 p-2 text-xs m-1  bg-gray-100 rounded-sm'>{description}</p>
         <div  className='text-left flex'>
            <ButtonLoader onClick={handler} loading={isLoading} title='بله' />
            <button  onClick={onClose} className='bg-red-500 text-red-100 px-3 p-1 rounded-sm w-[100px] mx-1 mt-2'>
            انصراف
            </button>
         </div>
      </div>
   </div>
  )
}
