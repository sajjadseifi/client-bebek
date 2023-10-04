import React from 'react'

export const AuthLayout = ({children}) => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      {children}
    </div>
  )
}
