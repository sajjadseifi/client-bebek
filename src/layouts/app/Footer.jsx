import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='py-3' style={{paddingBottom:70}}> 
        <div class="text-center text-neutral-200  dark:text-neutral-200 text-sm">
            <span>Powered By </span>
            <Link class="text-lime-400 " href="/">Sajjad Seifi </Link>
            <span> & </span>
            <Link class="text-lime-400 " href="/">Hossein Zare</Link>
      </div>
    </footer>
  )
}
