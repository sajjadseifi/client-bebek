import React from 'react'
import { useModalPage } from './ModalPage'
import {BiLeftArrowAlt} from 'react-icons/bi'
export const ModalPages = ({}) => {
  const {selectedPage,removeLastPage,canBack,title} = useModalPage()

  if(!selectedPage) 
    return

    return (
    <div className='fixed top-0 left-0 z-50 w-full h-full  rounded-t-md p-5 overflow-scroll'>
      <div className='flex justify-between'>
        <div></div>
        <div className='flex-1'>
          {title && (
            <h1 className='bg-red text-white py-5'>{title}</h1>
          )}
        </div>
        <div>
          {canBack && (
            <BiLeftArrowAlt 
                size={25} 
                className='text-lime-500' 
                onClick={removeLastPage}
            />
          )}
          </div>
      </div>
      {selectedPage}
    </div>
  )
}
