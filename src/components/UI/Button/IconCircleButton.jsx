import React from 'react'

export const IconCircleButton = ({
   color = 'lime',
   icon,
   Icon = ()=>{}
}) => {
  return (
    <div className={`p-1 rounded-md  bg-${color}-200 text-${color}-600 cursor-pointer mx-1`}>
        {icon ? icon :<Icon />} 
    </div>
  )
}
