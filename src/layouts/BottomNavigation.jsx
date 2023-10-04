import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {BiAbacus,BiAccessibility,BiQrScan,BiCartAdd} from 'react-icons/bi'
import {LuMenuSquare} from 'react-icons/lu'
import {AiOutlineFileAdd} from 'react-icons/ai'
import {TbLogout2} from 'react-icons/tb'

import { useAuthentication } from '../core/context/auth.context'

const iconButtons = [
   {
      title:'QR کد',
      Icon:BiQrScan,
      route:'/qr-code',
   },
   {
      title:'ثبت منو',
      Icon:AiOutlineFileAdd,
      route:'/category/add',
      authenticated:true
   },
   {
      title:'منو',
      Icon:LuMenuSquare,
      route:'/menu'
   },

   {
      title:'ثبت محصول',
      Icon:BiCartAdd,
      route:'/product/add',
      authenticated:true
   },
   {
      title:'ورود',
      Icon:BiAbacus,
      route:'/auth/login',
      authenticated:false
   },
   {
      title:'خروج',
      Icon:TbLogout2,
      route:'/auth/logout',
      authenticated:true
   },
] 
const classStyle = `
   text-xs
   md:text-sm 
   text-lime-700 
   text-center 
   space-y-2 
   py-2 
   px-4 
   duration-150
   bg-lime-200
   rounded-full

`
export const NavigationButton = ({title,Icon,route}) => {
   const [active,setActive] = useState(false)


      
   const onClasses = ({isActive}) => {
      setActive(isActive)
      return  classStyle + (active?'opacity-100  mb-10 xs:mb-5 ':'opacity-60 mb-0')
   }
   return (
      <NavLink  to={route} className={onClasses} >
         <div className='flex flex-col  items-center justify-center space-y-1 text-xs '>
            <span >{<Icon className='text-xl xs:text-lg'/>}</span>
            <span className='text-md  hidden xs:block' >{title}</span>
         </div>
      </NavLink>
   )
}
export const BottomNavigation = ({className,height=60,...props}) => {
   const {isLogined} = useAuthentication()
   const btns = iconButtons.filter((btn)=> !('authenticated' in btn) || btn.authenticated == isLogined)

  return (
    <div 
      className={`fixed  z-50 bottom-0 left-0 w-full  bg-lime-200 rounded-t-xl ${className} flex justify-around items-center`} 
      style={{
         height,
         ...props.style
      }}
      {...props}
      >
      {btns.map((props,idx)=><NavigationButton key={idx} {...props} />)}
    </div>
  )
}
