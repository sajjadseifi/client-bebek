import React from 'react'

export const SelectedCategory = ({category}) => category && 
( 
   <div className='my-6 text-center   text-sm sm:text-md md:text-lg   text-white'>
      <span>منوی انتخاب  شده</span>
      <span className='mx-2 py-1 px-3 bg-green-500 rounded'>{category.title}</span>
   </div>
)

