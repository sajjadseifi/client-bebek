import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='p-2 px-4'> 
        <div className="text-center text-neutral-200  bg-neutral-800 bg-opacity-80 rounded-sm p-1">
            <span>Powered By </span>
            <Link className="text-green-400 " href="/">Sajjad Seifi </Link>
            <span> & </span>
            <Link className="text-green-400 " href="/">Hossein Zare</Link>
      </div>
    </footer>
  )
}
