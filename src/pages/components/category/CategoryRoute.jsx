import React from 'react'
import { SelectedCategory } from '../SelectedCategory'

export const CategoryRoute = ({category,onNext=()=>{}}) => {
  return category && (
      <div className='flex justify-between px-5 items-center text-cyan-400 text-xs sm:text-sm md:text-lg'>
         <div >
            <div className='flex flex-row-reverse items-center space-x-2 cursor-pointer' onClick={onNext(-1)}>
               <span>قبلی</span>
            </div>
            </div>
         <SelectedCategory category={category}/>
         <div>
            <div className='flex items-center space-x-2 cursor-pointer'  onClick={onNext(1)} >
               <span>بعدی</span>
            </div>
            </div>
      </div>
   )
}
