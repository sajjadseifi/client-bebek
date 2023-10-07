import React from 'react'

export const Card = ({children,className}) => {
  return (
    <div className={`p-3 radius-5 text-white bg-neutral-500  rounded text-center	 shadow-md shadow-stone-500 ${className}`}>
      {children}
    </div>
  )
}
