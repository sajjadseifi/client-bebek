import React from 'react'

export const ButtonLoader = ({
   title='',
   loading=false,
   disabled,
   ...props
}) => {
   const spinner =   <div className='w-4 h-4 border-1  border-green-100  mx-auto rounded-full'>
         <div className='w-full h-full  border-2 border-l-green-400   rounded-full  animate-spin'>
         </div>
   </div>
  return (
   <div className='mt-2'>
      <button className="duration-150 bg-green-400 hover:bg-green-500 p-2 px-10 rounded w-full disabled:opacity-70 h-10 "   disabled={loading && disabled} {...props}>{loading?spinner:title}</button>
   </div>
  )
}
