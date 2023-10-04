import React from 'react'

export const SelectedCategory = ({category}) => category && 
( 
   <div className='my-2 text-center   text-xs sm:text-sm md:text-lg   text-white'>
      <span>منوی انتخاب  شده</span>
      <span className='mx-2 px-2 bg-lime-600 rounded'>{category.title}</span>
   </div>
)

