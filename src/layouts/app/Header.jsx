import React from 'react'
import { Link } from 'react-router-dom'
import CoffeeLogo from '../../assets/logo/black.jpg'

const details = {
   title1:"کافه ببک",
   title2:"BEBEK",
   logo : CoffeeLogo
}

export const Header = () => {
  return (
<header className="flex flex-row-reverse justify-between items-center p-5 text-left  bg-natural-900">
      <Link to='/' className='bg-green-50 px-2 rounded'>
         <h1 className='text-green-600 text-4xl'>{details.title1}</h1>
         <h2 className='text-green-600 text-xl'>{details.title2}</h2>
      </Link>
      <Link to='/'>
         <img  
            width={60}
            height={60}  
            src={details.logo}
            className="rounded-full" 
            alt="ببک" 
         />
      </Link>
</header>
  )
}
