import React from 'react'

export const IconButton = ({title,icon,textColor='',bgColor,onClick=()=>{},...props}) => {
   // const textColor = `text-${color}-900`
   // const bgColor = `bg-${color}-300`
  return (
         <div className={`py-2 text-left`}>
            <button className={`${bgColor} ${textColor} px-5 py-1 rounded`} onClick={onClick} {...props}>
               <div className='flex items-center justify-center'>
                  <span>{icon}</span>
                  <span className='mx-1'></span>
                  <span>{title}</span>
               </div>
            </button>
      </div>
  )
}
