import React from 'react'

export const Card = ({children,className}) => {
  return (
    <div className={`p-3 radius-5 text-white  rounded text-center	 shadow-md shadow-stone-950 ${className}`}>
      {children}
    </div>
  )
}
