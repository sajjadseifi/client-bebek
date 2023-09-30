import React from 'react'
import CoffeeLogo from '../../assets/icons/logo.jpg'
import { Link } from 'react-router-dom'
const details = {
   title1:"کافه ببک",
   title2:"BEBEK",
   logo : CoffeeLogo
}

export const Header = () => {
  return (
<header class="flex flex-row-reverse justify-between items-center p-5 text-left  bg-natural-900">
      <Link href='/admin'>
         <h1 className='text-lime-400 text-2xl'>{details.title1}</h1>
         <h2 className='text-lime-500'>{details.title2}</h2>
      </Link>
      <a href='/admin'>
         <img  
            width={80}
            height={80}  
            src={details.logo}
            className="rounded" 
            alt="ببک" 
         />
      </a>
</header>
  )
}