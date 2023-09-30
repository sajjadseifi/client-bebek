import React from 'react'

export const SelectedCategory = ({category}) => category && 
( 
   <div className='my-2 text-center  sm:text-lg text-sm    text-white'>
      <span>منوی انتخاب  شده</span>
      <span className='mx-2 px-2 bg-lime-600 rounded'>{category.title}</span>
   </div>
)