import React, {  useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useAuthentication } from '../core/context/auth.context'
import { iconButtons } from './buttons.nav'

export const NavigationButton = ({title,Icon,route}) => {
      
   const onClasses = ({isActive}) => {
      const activeStyle = isActive ?' opacity-100  mb-20 xs:mb-5 scale-110 p-2 ':' opacity-60 mb-0 scale-90 p-0 '
      return  `block  duration-150 bg-lime-200 rounded-full ${activeStyle}`
   }
   return (
      <NavLink  to={route} className={onClasses} >
         <div className='flex flex-col  items-center justify-center text-xs md:text-sm  text-lime-700  text-center  space-y-2 '>
            <span >{<Icon className='text-xl xs:text-lg'/>}</span>
            <span className='text-md  hidden xs:block' >{title}</span>
         </div>
      </NavLink>
   )
}
export const BottomNavigation = ({className,height=60,...props}) => {
   const ref = useRef()
   const {isLogined} = useAuthentication()
   const btns = iconButtons.filter((btn)=> !('authenticated' in btn) || btn.authenticated == isLogined)

  return (
    <div 
      ref={ref}
      className={`fixed  z-50 bottom-0 left-0 w-full  bg-lime-200 rounded-t-xl  flex justify-around items-center ${className}`} 
      style={{
         height,
         ...props.style
      }}
      
      {...props}
      >
      {btns.map((props,idx)=><div key={idx} className='flex-1'><NavigationButton key={idx} {...props} /></div>)}
    </div>
  )
}

export default BottomNavigation
